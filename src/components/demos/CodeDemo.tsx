import { ActionIcon, Box, useMantineTheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { SiTypescript, SiPython, SiCss3 } from 'react-icons/si';

import IconWrapper from '../IconWrapper';

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

// TODO : Figure out how to fix the mobile styling for this component
const CodeDemo = () => {
    const theme = useMantineTheme();
    return (
        <Box m='lg'>
            <Prism.Tabs>
                <Prism.Tab withLineNumbers label="styles.css" language="css" icon={
                    <ActionIcon size='sm' radius='sm' variant='transparent' style={{ color: theme.colors.red[7] }}>
                        <SiCss3 />
                    </ActionIcon>
                }>
                    {cssCode}
                </Prism.Tab>
                <Prism.Tab withLineNumbers label="decorator.py" language="python" icon={
                    <IconWrapper size='sm' color='yellow' radius='sm' variant='transparent'>
                        <SiPython fontSize='small' />
                    </IconWrapper>
                }>
                    {pythonCode}
                </Prism.Tab>
                <Prism.Tab withLineNumbers label="component.tsx" language="tsx" icon={
                    <IconWrapper size='sm' color='blue' radius='sm' variant='transparent'>
                        <SiTypescript fontSize='small' />
                    </IconWrapper>
                }>
                    {demoCode}
                </Prism.Tab>
            </Prism.Tabs>
        </Box>
    );
};

export default CodeDemo;