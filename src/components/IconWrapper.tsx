import { ActionIcon, MantineNumberSize, ActionIconVariant, MantineColor } from '@mantine/core';

interface IconProps {
    size: MantineNumberSize | undefined;
    color: string | MantineColor;
    radius: MantineNumberSize | undefined;
    variant: ActionIconVariant | undefined;
    children: any;
};

const IconWrapper = ({ size, color, radius, variant, children }: IconProps) => (
    <ActionIcon size={size} color={color} radius={radius} variant={variant}>
        {children}
    </ActionIcon>
);

export default IconWrapper;