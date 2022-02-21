import { Button, Paper, Text, Box, Loader, Badge, ColorScheme, ActionIcon, MantineTheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

interface Props {
    dark: boolean,
    toggleColorScheme: (value?: ColorScheme | undefined) => void
};

const styles = (theme: MantineTheme) => ({
    border: `1px solid ${theme.colors.gray[3]}`,
    color: theme.colors.gray[7],
  
    '&:hover': {
        backgroundColor: theme.colors.gray[0],
    },
});

const Testing: React.FC<Props> = ({ dark, toggleColorScheme }) => {
    return (
        <Box sx={(theme) => ({
            display: 'flex', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        })}>
            <Box sx={(theme) => ({
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            })}>
                <Paper sx={(theme) => ({
                    backgroundColor: theme.colors.gray[5],
                    color: theme.colors.dark[9],
                })}>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>This is a some simple text</Text>
                </Paper>
                <Button variant="outline" onClick={() => toggleColorScheme()}>Outline button</Button>
                <Box>
                    <ActionIcon
                        variant="outline"
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? (
                            <SunIcon style={{ width: 18, height: 18 }} />
                        ) : (
                            <MoonIcon style={{ width: 18, height: 18 }} />
                        )}
                    </ActionIcon>
                </Box>
                <Button variant="filled" sx={styles}>Filled button</Button>
                <Badge variant="dot">Dot badge</Badge>
                <Loader />
            </Box>
        </Box>
    );
};

export default Testing;