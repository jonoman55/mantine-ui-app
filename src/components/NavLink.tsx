import { Link } from 'react-router-dom';
import { Text } from '@mantine/core';

interface NavLinkProps {
    text: string;
    to: string;
};

const NavLink = ({ text, to }: NavLinkProps) => (
    <Text component={Link} variant='link' to={to} color='cyan'>
        {text}
    </Text>
);

export default NavLink;