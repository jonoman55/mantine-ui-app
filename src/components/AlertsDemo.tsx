import { Group, Button, TextInput, ActionIcon } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { CheckIcon, EnvelopeClosedIcon, PaperPlaneIcon } from '@modulz/radix-icons';

const AlertsDemo = () => {
    const notifications = useNotifications();
    return (
        <Group position="center">
            <Button
                variant="outline"
                onClick={() =>
                    notifications.showNotification({
                        title: 'Default notification',
                        message: 'Hey there, your code is awesome! 🤥',
                    })
                }
            >
                Show notification
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    Array(10)
                        .fill(0)
                        .forEach((_, index) => {
                            notifications.showNotification({
                                title: `Notification ${index + 1}`,
                                message: 'Most notifications are added to queue',
                                autoClose: false,
                            });
                        });
                }}
            >
                Show 10 notifications
            </Button>

            <Button variant="outline" color="gray" onClick={() => notifications.cleanQueue()}>
                Clean queue
            </Button>

            <Button variant="outline" color="red" onClick={() => notifications.clean()}>
                Clean all
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    const id = notifications.showNotification({
                        loading: true,
                        title: 'Loading your data',
                        message: 'Data will be loaded in 3 seconds, you cannot close this yet',
                        autoClose: false,
                        disallowClose: true,
                    });

                    setTimeout(() => {
                        notifications.updateNotification(id, {
                            id,
                            color: 'teal',
                            title: 'Data was loaded',
                            message:
                                'Notification will close in 2 seconds, you can close this notification now',
                            icon: <CheckIcon />,
                            autoClose: 2000,
                        });
                    }, 3000);
                }}
            >
                Show update notification
            </Button>
            <Button variant="outline" onClick={() =>
                notifications.showNotification({ message: 'I will close in 4 seconds' })
            }>
                Notifications Provider timeout
            </Button>

            <Button variant="outline" onClick={() =>
                notifications.showNotification({ autoClose: 500, message: 'I will close in 500ms' })
            }>
                Closes in 500ms
            </Button>

            <Button variant="outline" onClick={() =>
                notifications.showNotification({
                    color: 'blue',
                    title: 'I will never close',
                    message: 'unless you click X',
                    autoClose: false,
                })
            }>
                Never closes automatically
            </Button>
            <Button
                variant="outline"
                leftIcon={<EnvelopeClosedIcon />}
                onClick={() => {
                    const id = notifications.showNotification({
                        disallowClose: true,
                        title: 'Subscribe to email newsletter',
                        message: (
                            <>
                                <div style={{ display: 'flex', paddingTop: 5 }}>
                                    <TextInput
                                        icon={<EnvelopeClosedIcon />}
                                        placeholder="Enter your email"
                                        style={{ flex: 1, marginRight: 15 }}
                                    />
                                    <ActionIcon
                                        onClick={() => notifications.hideNotification(id)}
                                        size={36}
                                        color="blue"
                                        variant="filled"
                                    >
                                        <PaperPlaneIcon />
                                    </ActionIcon>
                                </div>
                            </>
                        ),
                    });
                }}
            >
                Subscribe to email newsletter
            </Button>
        </Group>
    );
};

export default AlertsDemo;