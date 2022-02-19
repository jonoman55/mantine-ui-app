import { ColorSchemeProvider, MantineProvider, Paper, ColorScheme } from "@mantine/core";
import { useLocalStorageValue, useHotkeys } from "@mantine/hooks";
import Header  from "./components/Header";
import Cards from "./components/Cards";

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
                <Paper padding='md' radius={0} style={{ minHeight: '100vh' }}>
                    <Header colorScheme={colorScheme} />
                    <Cards />
                </Paper>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default App;