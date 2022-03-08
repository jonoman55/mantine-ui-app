import { useState, useEffect } from "react";
import { Box, Container, Group, Text } from "@mantine/core";
import { Calendar, RangeCalendar } from "@mantine/dates";
import { useMediaQuery } from '@mantine/hooks';
import "dayjs/locale/en";

const CalendarsDemo: React.FC = () => {
    const matches = useMediaQuery('(max-width: 400px)');
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [rangeValue, setRangeValue] = useState<[Date, Date]>([new Date(), new Date()]);
    useEffect(() => {
        console.log(calendarValue);
    }, [calendarValue]);   
    return (
        <Container fluid>
            <Group m="lg" position="center" direction={matches ? "column" : "row"} align="flex-start" spacing={2}>
                <Box>
                    <Text align="center" color="red" size="lg" weight={700} underline mb="sm">Localized Custom Calendar</Text>
                    <Calendar
                        mb="md"
                        fullWidth
                        size="xl"
                        styles={(theme) => ({
                            cell: {
                                border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.red[3] : theme.colors.blue[4]}`,
                            },
                            day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.md },
                            weekday: { fontSize: theme.fontSizes.md },
                            weekdayCell: {
                                fontSize: theme.fontSizes.md,
                                backgroundColor:
                                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                                border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
                                height: 70,
                            },
                        })}
                        locale="en"
                        amountOfMonths={1}
                        value={calendarValue}
                        onChange={setCalendarValue}
                    />
                </Box>
                <Box>
                    <Text align="center" color="blue" size="lg" weight={700} underline mb="sm">Range Calendar</Text>
                    <RangeCalendar
                        m="sm"
                        value={rangeValue}
                        onChange={setRangeValue}
                        amountOfMonths={1}
                    />
                </Box>
            </Group>
        </Container>
    );
};

export default CalendarsDemo;