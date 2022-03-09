import { useEffect } from "react";
import { Box, Container, Group, Text } from "@mantine/core";
import { TimeInput, TimeRangeInput  } from "@mantine/dates";
import { ClockIcon, GitHubLogoIcon } from '@modulz/radix-icons';

import { useAppContext } from '../../context/AppContext';

const TimeRangeInputDemo: React.FC = () => {
    const { rangeValue, setRangeValue } = useAppContext();
    return (
        <TimeRangeInput mt="sm" label="Appointment time" value={rangeValue} onChange={setRangeValue} clearable
            styles={(theme) => ({
                filledVariant: {
                    backgroundColor: theme.colors.red[7]
                }
            })}
        />
    );
};

const TimeInputsDemo: React.FC = () => {
    const { timeValue, setTimeValue,} = useAppContext();

    useEffect(() => {
        console.log(timeValue);
    }, [timeValue]);

    return (
        <Container fluid>
            <Group m="lg" position="center" direction="column" spacing={12}>
                <Box>
                    <Text align="center" color="blue" size="lg" weight={700} underline mb="sm">Time Inputs</Text>
                    <TimeInput mt="lg" value={timeValue} onChange={setTimeValue} />
                    <TimeInput mt="lg" value={timeValue} onChange={setTimeValue} label="What time is it now?" withSeconds />
                    <TimeInput mt="lg" value={timeValue} onChange={setTimeValue} format="12" />
                    <TimeInput mt="lg" value={timeValue} onChange={setTimeValue} icon={<ClockIcon />} />
                    <Box mt="lg">
                        <TimeInput value={timeValue} onChange={setTimeValue} icon={<GitHubLogoIcon />} format="12" label="This is a label" description="This is a description" styles={(theme) => ({
                            icon: {
                                color: theme.colors.orange[7]
                            },
                            filledVariant: {
                                backgroundColor: theme.colors.blue[5]
                            }
                        })} />
                    </Box>
                    <Box mt="lg">
                        <Text align="center" color="red" size="lg" weight={700} underline mb="sm">Time Range Input</Text>
                        <TimeRangeInputDemo />
                    </Box>
                </Box>
            </Group>
        </Container>
    );
};

export default TimeInputsDemo;