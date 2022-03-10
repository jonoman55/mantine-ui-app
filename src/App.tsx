import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { useHotkeys } from '@mantine/hooks';

import { Layout as AppContent } from './components';
import { AppProvider } from './contexts/AppContext';
import { useThemeContext } from './contexts/ThemeContext';

const App: React.FC = () => {
    const { colorScheme, toggleColorScheme } = useThemeContext();
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