[![Join Slack](https://img.shields.io/badge/Join%20us%20on-Slack-e01563.svg)](https://join.slack.com/t/baseui/shared_invite/enQtNDI0NTgwMjU0NDUyLTk3YzM1NWY2MjY3NTVjNjk3NzY1MTE5OTI4Y2Q2ZmVkMTUyNDc1MTcwYjZhYjlhOWQ2M2NjOWJkZmQyNjFlYTA)

**Currently baseui is under active development, and may not be ready for production use.**

# BASE UI

[![Build status](https://badge.buildkite.com/92a7500cd98f619621c4801833d8b358c2fd79efc9b98f1b98.svg?branch=master)](https://buildkite.com/uberopensource/baseui)

`baseui` is a design system comprised of modern, responsive, living components.

### Usage

Add `baseui` to your project:

```bash
# using yarn
yarn add baseui

# using npm
npm install baseui
```

```javascript
import {LightTheme, ThemeProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/components/input';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export default function Hello() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Centered>
        <StatefulInput />
      </Centered>
    </ThemeProvider>
  );
}
```

### Docs

[Docs by Storybook](https://baseui.netlify.com/)

### Contributing

[Contributing](CONTRIBUTING.md)
