import { useState } from 'react';
import { Box, Button, Container } from '@mantine/core';
import { StarIcon, TwitterLogoIcon, GitHubLogoIcon } from '@modulz/radix-icons';

const Buttons: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleClick = () => { 
        setLoading(!loading);
    };

    return (
        <Box style={{ width: '100%', height: '100%' }}>
            <Container size='lg' padding='xs' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Button variant='gradient' gradient={{ from: 'indigo', to: 'cyan' }} leftIcon={<StarIcon />} onClick={handleClick} loading={loading}>
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
                    gradient={{ from: 'black', to: 'gray', deg: 40 }}
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
                <Button variant='gradient' gradient={{ from: 'grape', to: 'pink', deg: 35 }}>Grape pink</Button>
            </Container>
        </Box>
    );
};

export default Buttons;