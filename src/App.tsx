import { ColorSchemeProvider, MantineProvider, ColorScheme } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { useLocalStorageValue, useHotkeys } from '@mantine/hooks';

import { Layout as AppContent } from './components';
import { AppProvider } from './context/AppContext';

// TODO : Implement a ThemeContextProvider
const App: React.FC = () => {
    const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    useHotkeys([['mod+j', () => toggleColorScheme()]]);
    return (
        <AppProvider>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{ colorScheme }}>
                    <NotificationsProvider autoClose={3000} limit={5}>
                        <ModalsProvider>
                            <AppContent />
                        </ModalsProvider>
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </AppProvider>
    );
};

export default App;