import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useMantineTheme, AppShell, Burger, Divider, Header, MediaQuery, Navbar, Text, Button } from '@mantine/core';

import ThemeSwitch from './ThemeSwitch';
import Cards from './CardsDemo';
import Codes from './CodeDemo';
import Table from './TableDemo';
import Buttons from './ButtonsDemo';
import Chips from './ChipsDemo';
import TextAndTitle from './TextTitleDemo';
import { GitHubLogoIcon } from '@modulz/radix-icons';

// TODO : Add IDs to Header and Footer for page nav
// TODO : Implement either the use-window-scroll or use-scroll-into-view hooks for page nav
// https://mantine.dev/hooks/use-window-scroll/ 
// https://mantine.dev/hooks/use-scroll-into-view/ 
const AppShellDemo: React.FC = () => {
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
                            <Text component={Link} variant='link' to='/' color='cyan'>
                                Home
                            </Text>
                            <Text component={Link} variant='link' to='/cards' color='cyan'>
                                Cards
                            </Text>
                            <Text component={Link} variant='link' to='/buttons' color='cyan'>
                                Buttons
                            </Text>
                            <Text component={Link} variant='link' to='/code' color='cyan'>
                                Code
                            </Text>
                            <Text component={Link} variant='link' to='/table' color='cyan'>
                                Table
                            </Text>
                            <Text component={Link} variant='link' to='/chips' color='cyan'>
                                Chips
                            </Text>
                            <Text component={Link} variant='link' to='/text' color='cyan'>
                                Text & Title
                            </Text>
                        </Navbar.Section>
                        <Navbar.Section>
                            <GitHubButton />
                            {/* <Text component='a' href='https://github.com/jonoman55/' target='_blank'>Visit My GitHub</Text> */}
                        </Navbar.Section>
                    </Navbar>
                }
                header={
                    <Header height={70} padding='md'>
                        {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size='sm'
                                    color={theme.colors.gray[6]}
                                    mr='xl'
                                />
                            </MediaQuery>
                            <Text component={Link} to='/' style={{ fontWeight: 700, fontSize: 24 }}>Mantine UI</Text>
                            <ThemeSwitch />
                        </div>
                    </Header>
                }
            >
                {/* AppShell content */}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/cards' element={<Cards />} />
                    <Route path='/buttons' element={<Buttons />} />
                    <Route path='/code' element={<Codes />} />
                    <Route path='/table' element={<Table />} />
                    <Route path='/chips' element={<Chips />} />
                    <Route path='/text' element={<TextAndTitle />} />
                </Routes>
            </AppShell>
        </Router>
    );
};

const HomePage: React.FC = () => (
    <div>
        <Cards />
        <Divider my='lg' />
        <Buttons />
        <Divider my='lg' />
        <Codes />
        <Divider my='lg' />
        <Table />
        <Divider my='lg' />
        <Chips />
        <Divider my='lg' />
        <TextAndTitle />
    </div>
);

const GitHubButton: React.FC = () => (
    <Button
        component='a'
        href='https://github.com/jonoman55'
        target='_blank'
        leftIcon={<GitHubLogoIcon />}
        variant='gradient'
        gradient={{ from: 'dark', to: 'gray', deg: 138 }}
    >
        GitHub
    </Button>
);

export default AppShellDemo;