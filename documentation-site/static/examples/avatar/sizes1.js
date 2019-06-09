import {Avatar} from 'baseui/avatar';
import Code from '../../../pages/components/code';

const scope = {Avatar};

const code = `import * as React from 'react';
import {Avatar} from 'baseui/avatar';

export default () => (
  <React.Fragment>
    {['scale800', 'scale1000', 'scale1200', 'scale1400', '64px'].map(
      (size, index) => (
        <Avatar
          name={\`user\`}
          size={size}
          src={\`https://api.adorable.io/avatars/285/\${index}@adorable.io.png\`}
          key={size}
        />
      ),
    )}
  </React.Fragment>
);`;

export default () => {
  return <Code code={code} scope={scope} />;
};
