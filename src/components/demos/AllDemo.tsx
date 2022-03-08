import { Box, Divider } from '@mantine/core';

import { Cards, Codes, Table, Buttons, Chips, TextAndTitle, Alerts, Modals, Inputs, Calendars } from '.';

const AllDemo: React.FC = () => (
    <Box>
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
        <Divider my='lg' />
        <Alerts />
        <Divider my='lg' />
        <Modals />
        <Divider my='lg' />
        <Inputs />
        <Divider my='lg' />
        <Calendars />
    </Box>
);

export default AllDemo;