import { useMantineTheme, Grid, Card, Image, Group, Text, Badge, Button } from '@mantine/core';

const CardsDemo: React.FC = () => {
    const theme = useMantineTheme();
    return (
        <Grid justify='space-around' style={{ margin: '1rem' }} id='cards'>
            <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
                <Card shadow='sm' padding='lg' style={{ boxShadow: '0px 10px 15px 0px hsla(0, 0%, 0%, 0.20)' }}>
                    <Card.Section>
                        <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fen.visitbergen.com%2Fdbimgs%2FFjord-norway.jpg&f=1&nofb=1' height={160} alt='' />
                    </Card.Section>
                    <Group position='apart' style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color='pink' variant='light'>
                            On Sale
                        </Badge>
                    </Group>
                    <Text size='sm' style={{ lineHeight: 1.5 }}>
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway.
                    </Text>
                    <Button variant='light' color='blue' fullWidth style={{ marginTop: 14 }}>
                        Book classic tour now
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
                <Card shadow='sm' padding='lg' style={{ boxShadow: '0px 10px 15px 0px hsla(0, 0%, 0%, 0.20)' }}>
                    <Card.Section>
                        <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fen.visitbergen.com%2Fdbimgs%2FFjord-norway.jpg&f=1&nofb=1' height={160} alt='' />
                    </Card.Section>
                    <Group position='apart' style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color='pink' variant='light'>
                            On Sale
                        </Badge>
                    </Group>
                    <Text size='sm' style={{ lineHeight: 1.5 }}>
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway.
                    </Text>
                    <Button variant='light' color='blue' fullWidth style={{ marginTop: 14 }}>
                        Book classic tour now
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
                <Card shadow='sm' padding='lg' style={{ boxShadow: '0px 10px 15px 0px hsla(0, 0%, 0%, 0.20)' }}>
                    <Card.Section>
                        <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fen.visitbergen.com%2Fdbimgs%2FFjord-norway.jpg&f=1&nofb=1' height={160} alt='' />
                    </Card.Section>
                    <Group position='apart' style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color='pink' variant='light'>
                            On Sale
                        </Badge>
                    </Group>
                    <Text size='sm' style={{ lineHeight: 1.5 }}>
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway.
                    </Text>
                    <Button variant='light' color='blue' fullWidth style={{ marginTop: 14 }}>
                        Book classic tour now
                    </Button>
                </Card>
            </Grid.Col>
        </Grid>
    );
};

export default CardsDemo;