import { ColorScheme } from '@mantine/core';
import { useLocalStorageValue } from '@mantine/hooks';
import { createContext, useContext, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

interface IThemeContext {
    colorScheme: ColorScheme;
    setColorScheme: (val: ColorScheme | ((prevState: ColorScheme) => ColorScheme)) => void;
    toggleColorScheme: (value?: ColorScheme | undefined) => void;
};

const initalState: IThemeContext = {
    colorScheme: 'light',
    setColorScheme: function (val: ColorScheme | ((prevState: ColorScheme) => ColorScheme)): void {
        throw new Error('Function not implemented.');
    },
    toggleColorScheme: function (value?: ColorScheme): void {
        throw new Error('Function not implemented.');
    }
};

const ThemeContext = createContext<IThemeContext>(initalState);

function ThemeProvider(props: Props) {
    const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
    const values = {
        colorScheme,
        setColorScheme,
        toggleColorScheme,
    };

    return (
        <ThemeContext.Provider value={values}>
            {props.children}
        </ThemeContext.Provider>
    );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };