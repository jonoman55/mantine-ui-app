import { Box, Text } from "@mantine/core";
import ThemeSwitch from "./ThemeSwitch";

interface Props {
    colorScheme: string
};

const Header: React.FC<Props> = ({ colorScheme }) => (
    <Box sx={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <ThemeSwitch />
        <Text style={{ paddingLeft: 8 }}>
            {colorScheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </Text>
    </Box>
);

export default Header;