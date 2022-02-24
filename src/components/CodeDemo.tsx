/* eslint-disable no-useless-escape */
// eslint-disable-next-line
import { ActionIcon, Box, Code, Group, useMantineTheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { SiTypescript, SiPython, SiCss3 } from 'react-icons/si';
import { IconWrapper } from './Wrappers';

// eslint-disable-next-line
const codeForPreviousDemo = 
`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

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

const CodeDemo = () => {
    const theme = useMantineTheme();
    return (
        <>
            {/* <Box m='md'>
                <Code block>{codeForPreviousDemo}</Code>
            </Box>
            <Group direction='column' m='lg'>
                <Code color='red'>React.createElement()</Code>
                <Code color='teal'>React.createElement()</Code>
                <Code color='blue'>React.createElement()</Code>
            </Group>
            <Group m='md'>
                <Prism language='tsx'>{demoCode}</Prism>
                <Prism language='tsx' withLineNumbers>{demoCode}</Prism>
            </Group> */}
            <Box m='lg' id='code'>
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
        </>
    );
};

export default CodeDemo;