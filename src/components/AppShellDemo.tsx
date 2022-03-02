import { useState } from 'react';
import { AppShell, Burger, Divider, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';

import ThemeSwitch from './ThemeSwitch';
import Cards from './CardsDemo';
import Codes from './CodeDemo';
import Table from './TableDemo';
import Buttons from './ButtonsDemo';
import Chips from './ChipsDemo';
import TextAndTitle from './TextTitleDemo';

// TODO : Add IDs to Header and Footer for page nav
// TODO : Implement either the use-window-scroll or use-scroll-into-view hooks for page nav
// https://mantine.dev/hooks/use-window-scroll/ 
// https://mantine.dev/hooks/use-scroll-into-view/ 
function AppShellDemo() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
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
                        <Text component='a' href='#cards' target='_self'>Cards</Text>
                        <Text component='a' href='#buttons' target='_self'>Buttons</Text>
                        <Text component='a' href='#code' target='_self'>Code</Text>
                        <Text component='a' href='#table' target='_self'>Table</Text>
                        <Text component='a' href='#chips' target='_self'>Chips</Text>
                        <Text component='a' href='#texts' target='_self'>Text & Title</Text>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Text id="footer">Footer</Text>
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
                        <Text id="header">Header</Text>
                        <ThemeSwitch />
                    </div>
                </Header>
            }
        >
            {/* AppShell content */}
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
        </AppShell>
    );
};

export default AppShellDemo;