import prettier from 'prettier/standalone';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import babel from 'prettier/parser-babylon';

const parse = babel.parsers.babel.parse as (code: string) => any;

const FILTERED = [/^import.*/gim, 'export default', 'export'];

export const transformCode = (code: string) =>
  FILTERED.reduce(
    (acc, token) => (acc as string).replace(token, ''),
    code,
  ) as string;

export const formatCode = (code: string) => {
  try {
    return (
      prettier
        .format(code, {
          parser: 'babel',
          printWidth: 70,
          plugins: [babel],
        })
        // remove newline at the end of file
        .replace(/[\r\n]+$/, '')
    );
  } catch (e) {
    return code;
  }
};

export function parseProps(code: string, elementName: string) {
  const propValues: any = {};
  try {
    const ast = parse(code);
    traverse(ast, {
      enter(path) {
        if (
          Object.keys(propValues).length === 0 && // process just the first element
          path.node.type === 'JSXElement' &&
          path.node.openingElement.type === 'JSXOpeningElement' &&
          //@ts-ignore
          path.node.openingElement.name.name === elementName
        ) {
          path.node.openingElement.attributes.forEach((attr: any) => {
            const name = attr.name.name;
            let value = null;
            if (attr.value === null) {
              //boolean prop without value
              value = true;
            } else {
              if (attr.value.type === 'StringLiteral') {
                value = attr.value.value;
              } else if (attr.value.type === 'JSXExpressionContainer') {
                if (attr.value.expression.type === 'BooleanLiteral') {
                  value = attr.value.expression.value;
                } else {
                  value = generate(attr.value.expression).code;
                }
              }
            }
            propValues[name] = value;
          });
          propValues['children'] = generate(
            (path.node as any).children[0],
          ).code.replace(/^\s+|\s+$/g, '');
        }
      },
    });
  } catch (e) {
    throw new Error("Code is not valid and can't be parsed.");
  }
  return propValues;
}
