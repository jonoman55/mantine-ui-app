import { useEffect, useState } from 'react';
import { Chips, Chip, Box } from '@mantine/core';

// TODO : Add a wrapper component to align the chips
const ChipsDemo: React.FC = () => {
    // array of strings value when multiple is true
    const [value, setValue] = useState<string[]>(['react']);

    useEffect(() => {
        console.log(value);
    }, [value]);
    
    return (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Chips value={value} onChange={setValue} multiple color="red" variant="filled" spacing="lg" size="xl" radius="lg">
                <Chip value="react">React</Chip>
                <Chip value="ng">Angular</Chip>
                <Chip value="svelte">Svelte</Chip>
                <Chip value="vue">Vue</Chip>
            </Chips>
        </Box>
    );
};

export default ChipsDemo;