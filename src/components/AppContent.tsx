import { HashRouter as Router } from 'react-router-dom';
import { useMantineTheme, AppShell, Burger, Header, MediaQuery, Navbar, Text, Box } from '@mantine/core';

import Routes from '../routes';
import NavLink from './NavLink';
import ThemeSwitch from './ThemeSwitch';
import GitHubButton from './GitHubButton';
import MantineLink from './MantineLink';
import { useAppContext } from '../contexts/AppContext';

const AppContent: React.FC = () => {
    const theme = useMantineTheme();
    const { opened, setOpened } = useAppContext();
    return (
        <Router>
            <AppShell
                // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
                navbarOffsetBreakpoint='sm'
                // fixed prop on AppShell will be automatically added to Header and Navbar
                fixed
                navbar={
                    <Navbar
                        padding='md'
                        // Breakpoint at which navbar will be hidden if hidden prop is true
                        hiddenBreakpoint='sm'
                        // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
                        hidden={!opened}
                        // when viewport size is less than theme.breakpoints.sm navbar width is 100%
                        // viewport size > theme.breakpoints.sm – width is 300px
                        // viewport size > theme.breakpoints.lg – width is 400px
                        width={{ sm: 300, lg: 400 }}
                    >
                        <Navbar.Section>
                            <Text>Demos</Text>
                        </Navbar.Section>
                        <Navbar.Section grow mt='lg' style={{
                            display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
                            justifyContent: 'flex-start', alignItems: 'flex-start'
                        }}>
                            <NavLink text='All' to='/' />
                            <NavLink text='Cards' to='/cards' />
                            <NavLink text='Buttons' to='/buttons' />
                            <NavLink text='Code' to='/code' />
                            <NavLink text='Table' to='/table' />
                            <NavLink text='Chips' to='/chips' />
                            <NavLink text='Text' to='/text' />
                            <NavLink text='Alerts' to='/alerts' />
                            <NavLink text='Modals' to='/modals' />
                            <NavLink text='Inputs' to='/inputs' />
                            <NavLink text='Calendars' to='/calendars' />
                            <NavLink text='TimeInputs' to='/time' />
                            <NavLink text='Random' to='/random' />
                        </Navbar.Section>
                        <Navbar.Section>
                            <GitHubButton />
                        </Navbar.Section>
                    </Navbar>
                }
                header={
                    <Header height={70} padding='md'>
                        {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                        <Box style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size='sm'
                                    color={theme.colors.gray[6]}
                                    mr='xl'
                                />
                            </MediaQuery>
                            <MantineLink />
                            <ThemeSwitch />
                        </Box>
                    </Header>
                }
            >
                {/* AppShell content */}
                <Routes />
            </AppShell>
        </Router>
    );
};

export default AppContent;