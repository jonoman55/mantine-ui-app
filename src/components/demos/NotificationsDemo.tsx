import axios from "axios";
import { useEffect, useCallback, useState } from "react";
import { Box, Button, Group, Text, Tooltip } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { useMediaQuery } from "@mantine/hooks";
import { CheckIcon, StopIcon, InfoCircledIcon } from "@modulz/radix-icons";

import { useAppContext } from "../../contexts/AppContext";

// TODO : Implement custom tooltip for the stop button 
const randomNumber = (minimum: number, maximum: number): number =>
    Math.floor(Math.random() * (maximum - minimum)) + minimum;

const NotificationsDemo: React.FC = () => {
    const matches = useMediaQuery('(max-width: 400px)');
    const notifications = useNotifications();

    const [cancel, setCancel] = useState(true);
    const { randomPlayer, setRandomPlayer } = useAppContext();

    const getPlayerName = useCallback(() => {
        axios.get(`http://www.balldontlie.io/api/v1/players/${randomNumber(1, 300)}`).then(res => {
            setRandomPlayer(res.data);
            notifications.showNotification({
                message: "WE GOT YA DATA!",
                title: "HERE SOME DATA!",
                color: "green",
                icon: <CheckIcon />
            });
        }).catch(err => console.log(err));
    }, [notifications, setRandomPlayer]);

    useEffect(() => {
        let id: NodeJS.Timeout;
        if (!cancel) {
            id = setTimeout(() => {
                getPlayerName();
            }, 3000);
        }
        return () => clearTimeout(id);
    }, [cancel, getPlayerName]);

    return (
        <Group position="center" direction="column" m="lg">
            <Box>
                <Tooltip
                    withArrow
                    label="Get Random Basketball Players!"
                    color="blue"
                    position={matches ? "bottom" : "left"}
                    placement={matches ? "center" : "end"}
                >
                    <Button variant="outline" onClick={() => {
                        notifications.showNotification({
                            message: "WE ARE GETTING YOUR DATA",
                            color: "blue",
                            icon: <InfoCircledIcon />
                        });
                        getPlayerName();
                        setCancel(false);
                    }}>
                        Start
                    </Button>
                </Tooltip>
                <Tooltip
                    withArrow
                    label="Stop Getting Random Player!"
                    color="red"
                    position={matches ? "bottom" : "right"}
                    placement={matches ? "center" : "start"}
                    opened={!cancel}
                >
                    <Button disabled={cancel} variant="outline" color="red" ml="md" onClick={() => {
                        notifications.showNotification({
                            message: "WE STOPPED GETTING YOUR DATA",
                            color: "red",
                            icon: <StopIcon />
                        });
                        setRandomPlayer({
                            first_name: "",
                            last_name: ""
                        });
                        setCancel(true);
                    }}>
                        Stop
                    </Button>
                </Tooltip>
            </Box>
            <Box>
                <Text mt="md" size="lg" weight={700}>
                    {randomPlayer?.first_name}{" "}{randomPlayer?.last_name}
                </Text>
            </Box>
        </Group>
    );
};

export default NotificationsDemo;