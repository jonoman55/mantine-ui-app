import { useEffect } from 'react';
import { Chips, Chip, Group } from '@mantine/core';

import { useAppContext } from '../../contexts/AppContext';

const ChipsDemo: React.FC = () => {
    const { chips, setChips } = useAppContext();

    useEffect(() => {
        console.log(chips);
    }, [chips]);
    
    return (
        <Group position='center'>
            <Chips value={chips} onChange={setChips} multiple color="red" variant="filled" spacing="lg" size="xl" radius="lg">
                <Chip value="react">React</Chip>
                <Chip value="angular">Angular</Chip>
                <Chip value="svelte">Svelte</Chip>
                <Chip value="vue">Vue</Chip>
            </Chips>
        </Group>
    );
};

export default ChipsDemo;