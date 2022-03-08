import { Box, Input, TextInput } from "@mantine/core";
import { ChevronDownIcon, GitHubLogoIcon, NotionLogoIcon } from "@modulz/radix-icons";

const InputsDemo: React.FC = () => (
    <Box m="lg">
        <TextInput
            icon={<GitHubLogoIcon />}
            rightSection={<NotionLogoIcon />}
            label="This is the best input field"
            description="No this is the best description"
            error="You've Bloody Errored!"
            required
        />
        <Input component="select" mt="md" rightSection={<ChevronDownIcon />}>
            <option value="1">1</option>
            <option value="2">2</option>
        </Input>
    </Box>
);

export default InputsDemo;