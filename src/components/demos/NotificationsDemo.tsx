import axios from "axios";
import { useState } from "react";
import { Button, Group, Text } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";

const NotificationsDemo: React.FC = () => {
    const notifications = useNotifications();
    const [randomPlayer, setRandomPlayer] = useState({ first_name: "" });

    const getPlayerName = () => {
        axios.get('http://www.balldontlie.io/api/v1/players/237').then(res => {
            setRandomPlayer(res.data);
            notifications.showNotification({
                message: "WE GOT YA DATA!",
                title: "HERE SOME DATA!",
                color: "green",
                icon: <CheckIcon />
            });
        }).catch(err => console.log(err));
    };

    return (
        <Group position="center" direction="column" m="lg">
            <Button
                variant="outline"
                onClick={() => {
                    notifications.showNotification({
                        message: "WE ARE GETTING YOUR DATA",
                    });
                    getPlayerName();
                }}
            >
                Show Data
            </Button>
            <Text mt="md">{randomPlayer.first_name}</Text>
        </Group>
    );
};

export default NotificationsDemo;