import { Link } from 'react-router-dom';
import { Text } from '@mantine/core';

import { useAppContext } from '../contexts/AppContext';

interface NavLinkProps {
    text: string;
    to: string;
};

const NavLink = ({ text, to }: NavLinkProps) => {
    const { setOpened } = useAppContext();
    return (
        <Text component={Link} variant='link' to={to} color='cyan' onClick={() => setOpened((o) => !o)}>
            {text}
        </Text>
    );
};

export default NavLink;