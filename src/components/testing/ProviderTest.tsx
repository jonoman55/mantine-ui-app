import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import Testing from './Testing';

const ProviderTest: React.FC  = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    const dark = colorScheme === 'dark';
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
            theme={{
                colorScheme,
                fontSizes: { md: 18 },
                loader: 'oval',
                colors: {
                    dark: [
                        '#d5d7e0',
                        '#acaebf',
                        '#8c8fa3',
                        '#666980',
                        '#4d4f66',
                        '#34354a',
                        '#2b2c3d',
                        '#1d1e30',
                        '#0c0d21',
                        '#01010a',
                    ],
                },
            }}
            styles={{
                Button: (theme) => ({
                    root: {
                        backgroundColor: theme.colors.red[7]
                    }
                })
            }}
        >
                <Testing dark={dark} toggleColorScheme={toggleColorScheme}/>
        </MantineProvider>
    </ColorSchemeProvider>
    );
};

export default ProviderTest;