import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useMantineTheme, AppShell, Burger, Header, MediaQuery, Navbar, Text, Box } from '@mantine/core';

import NavLink from './NavLink';
import ThemeSwitch from './ThemeSwitch';
import GitHubButton from './GitHubButton';
import MantineLink from './MantineLink';
import { All, Cards, Codes, Table, Buttons, Chips, TextAndTitle, Alerts, Modals } from './demos';

const AppContent: React.FC = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
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
                            <Text>Navbar</Text>
                        </Navbar.Section>
                        <Navbar.Section grow mt='lg' style={{ display: 'flex', flexDirection: 'column' }}>
                            <NavLink text='All' to='/' />
                            <NavLink text='Cards' to='/cards' />
                            <NavLink text='Buttons' to='/buttons' />
                            <NavLink text='Code' to='/code' />
                            <NavLink text='Table' to='/table' />
                            <NavLink text='Chips' to='/chips' />
                            <NavLink text='Text' to='/text' />
                            <NavLink text='Alerts' to='/alerts' />
                            <NavLink text='Modals' to='/modals' />
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
                <Routes>
                    <Route path='/' element={<All />} />
                    <Route path='/cards' element={<Cards />} />
                    <Route path='/buttons' element={<Buttons />} />
                    <Route path='/code' element={<Codes />} />
                    <Route path='/table' element={<Table />} />
                    <Route path='/chips' element={<Chips />} />
                    <Route path='/text' element={<TextAndTitle />} />
                    <Route path='/alerts' element={<Alerts />} />
                    <Route path='/modals' element={<Modals />} />
                </Routes>
            </AppShell>
        </Router>
    );
};

export default AppContent;