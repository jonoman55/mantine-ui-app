import { Box } from '@mantine/core';
import { Prism } from '@mantine/prism';

import { CSSIcon, PythonIcon, TypescriptIcon } from '../icons';

const demoCode = 
`import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const cssCode = 
`@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}
  
body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}
  
@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`;

const pythonCode = `@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Greater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
`;

const CodeDemo: React.FC = () => (
    <Box>
        <Prism.Tabs>
            <Prism.Tab withLineNumbers label="styles.css" language="css" copyLabel="Copy code to clipboard" copiedLabel="Code copied to clipboard" icon={<CSSIcon />}>
                {cssCode}
            </Prism.Tab>
            <Prism.Tab withLineNumbers label="decorator.py" language="python" copyLabel="Copy code to clipboard" copiedLabel="Code copied to clipboard" icon={<PythonIcon />}>
                {pythonCode}
            </Prism.Tab>
            <Prism.Tab withLineNumbers label="component.tsx" language="tsx" copyLabel="Copy code to clipboard" copiedLabel="Code copied to clipboard" icon={<TypescriptIcon />}>
                {demoCode}
            </Prism.Tab>
        </Prism.Tabs>
    </Box>
);

export default CodeDemo;