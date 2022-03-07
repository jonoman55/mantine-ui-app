import { useState, useEffect } from "react";
import { Group } from "@mantine/core";
import { Calendar, RangeCalendar } from "@mantine/dates";
import "dayjs/locale/en";

const CalendarsDemo: React.FC = () => {
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [rangeValue, setRangeValue] = useState<[Date, Date]>([new Date(), new Date()]);
    useEffect(() => {
        console.log(calendarValue);
    }, [calendarValue]);   
    return (
        <Group m="lg" position="center" direction="column">
            <Calendar
                styles={(theme) => ({
                    cell: {
                        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.red[3] : theme.colors.blue[4]}`,
                    },
                    day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
                    weekday: { fontSize: theme.fontSizes.lg },
                    weekdayCell: {
                        fontSize: theme.fontSizes.xl,
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
                        height: 70,
                    },
                })}
                locale="en"
                amountOfMonths={2}
                value={calendarValue}
                onChange={setCalendarValue}
            />
            <RangeCalendar
                mt="lg"
                value={rangeValue}
                onChange={setRangeValue}
                amountOfMonths={3}
            />
        </Group>
    );
};

export default CalendarsDemo;