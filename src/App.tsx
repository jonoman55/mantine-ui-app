import { ColorSchemeProvider, MantineProvider, ColorScheme, Paper } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
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
                <NotificationsProvider autoClose={3000} limit={5}>
                <ModalsProvider>
                    <Paper style={{ borderRadius: 0 }}>
                        <AppShellDemo />
                    </Paper>
                    </ModalsProvider>
                    </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider >
    );
};

export default App;