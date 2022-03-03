import { useState } from 'react';
import { Box, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { StarIcon, TwitterLogoIcon, GitHubLogoIcon } from '@modulz/radix-icons';

const ButtonsDemo: React.FC = () => {
    const notifications = useNotifications();
    const [loading, setLoading] = useState<boolean>(false);

    const handleClick = () => { 
        setLoading(!loading);
    };

    return (
        <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', margin: '1rem', gap: 12 }}>
            <Button variant='gradient' gradient={{ from: 'indigo', to: 'cyan' }} leftIcon={<StarIcon />} onClick={handleClick} loading={loading} style={{ width: 141 }}>
                {!loading ? 'Not Loading' : 'Loading'}
            </Button>
            <Button variant='gradient' gradient={{ from: 'orange', to: 'red' }} onClick={handleClick}>
                {!loading ? 'Start Loading' : 'Stop Loading'}
            </Button>
            <Button
                component='a'
                href='https://github.com/jonoman55'
                target='_blank'
                leftIcon={<GitHubLogoIcon />}
                variant='gradient'
                gradient={{ from: 'dark', to: 'gray', deg: 138 }}
            >
                GitHub
            </Button>
            <Button
                component='a'
                href='https://twitter.com/johnch1p'
                target='_blank'
                variant='filled'
                leftIcon={<TwitterLogoIcon width={18} height={18} />}
                styles={(theme) => ({
                    root: {
                        backgroundColor: '#00acee',
                        border: 0,
                        height: 42,
                        paddingLeft: 20,
                        paddingRight: 20,
                        '&:hover': {
                            backgroundColor: theme.fn.darken('#00acee', 0.05),
                        },
                    }
                })}
            >
                Twitter
            </Button>
            <Button variant='gradient' gradient={{ from: 'grape', to: 'pink', deg: 35 }} onClick={() =>
                notifications.showNotification({
                    title: 'Default notification',
                    message: 'Hey there, your code is awesome! 🤥',
                })}
            >
                Show Notification
            </Button>
        </Box>
    );
};

export default ButtonsDemo;