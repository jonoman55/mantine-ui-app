import { Button } from '@mantine/core';
import { GitHubLogoIcon } from '@modulz/radix-icons';

const GitHubButton: React.FC = () => (
    <Button
        component='a'
        href='https://github.com/https://github.com/jonoman55/mantine-ui-app'
        target='_blank'
        leftIcon={<GitHubLogoIcon />}
        variant='gradient'
        gradient={{ from: 'dark', to: 'gray', deg: 138 }}
    >
        GitHub
    </Button>
);

export default GitHubButton;