import { Title, Divider, ActionIcon, MantineNumberSize, ActionIconVariant, MantineColor } from '@mantine/core';

interface SectionProps {
    title: string,
    children: any,
};

export const SectionWrapper = ({ title, children }: SectionProps) => (
    <>
        <Divider
            my='sm'
            variant='solid'
            labelPosition='left'
            label={
                <Title align='center' m='sm' order={3}>
                    {title}
                </Title>
            }
        />
        {children}
    </>
);

interface IconProps {
    size: MantineNumberSize | undefined,
    color: string | MantineColor,
    radius: MantineNumberSize | undefined,
    variant: ActionIconVariant | undefined,
    children: any
};

export const IconWrapper = ({ size, color, radius, variant, children }: IconProps) => (
    <ActionIcon size={size} color={color} radius={radius} variant={variant}>
        {children}
    </ActionIcon>
);