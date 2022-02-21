import { ColorSchemeProvider, MantineProvider, ColorScheme } from '@mantine/core';
import { useLocalStorageValue, useHotkeys } from '@mantine/hooks';
import Layout from './components/Layout';
import './App.css';

const App: React.FC = () => {
    const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    useHotkeys([['mod+j', () => toggleColorScheme()]]);
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }}>
                <Layout colorScheme={colorScheme} />
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default App;