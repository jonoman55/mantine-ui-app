import { Box, Text, Title } from "@mantine/core";

const TextTitleDemo: React.FC = () => (
    <Box m="md">
        <Title order={2}>
            THIS IS A BIG 'OL TITLE
        </Title>
        <Text size="lg" weight={700} underline transform="capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Text
                variant="gradient"
                gradient={{ from: "red", to: "blue", deg: 138 }}
                size="xl"
            >
                Laborum at architecto dicta porro voluptate,
            </Text>
            doloribus itaque dolores reiciendis iste aut mollitia velit quam,
            deleniti dolor cum earum! Repellat, deleniti sunt?
        </Text>
    </Box>
);

export default TextTitleDemo;