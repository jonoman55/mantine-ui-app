import { Text } from '@mantine/core';

const MantineLink = () => (
    <Text variant='link' component='a' href='https://mantine.dev' target='_blank' color='gray' sx={(theme) => ({
        fontWeight: 700, fontSize: 24, textDecoration: 'none',
        '&:hover': { textDecoration: 'none', color: theme.colors.gray[6] }
    })}>
        Mantine UI
    </Text>
);

export default MantineLink;