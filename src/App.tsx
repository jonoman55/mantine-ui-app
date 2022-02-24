import { ColorSchemeProvider, MantineProvider, ColorScheme, Paper } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useLocalStorageValue, useHotkeys } from '@mantine/hooks';
import AppShellDemo from './components/AppShellDemo';
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
                <NotificationsProvider autoClose={3000}>
                    <Paper style={{ borderRadius: 0 }}>
                        <AppShellDemo />
                    </Paper>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default App;