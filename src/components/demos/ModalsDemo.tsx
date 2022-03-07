import { Button, Group, Text, TextInput } from '@mantine/core';
import { useModals } from '@mantine/modals';

const ModalsDemo: React.FC = () => {
    const modals = useModals();

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: 'Delete your profile',
            centered: true,
            children: (
                <Text size="sm">
                    Are you sure you want to delete your profile? This action is destructive and you will have
                    to contact support to restore your data.
                </Text>
            ),
            labels: { confirm: 'Delete account', cancel: "No don't delete it" },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => console.log('Confirmed'),
        });

    const openConfirmModal = () => modals.openConfirmModal({
        title: 'Please confirm your action',
        children: (
            <Text size="sm">
                This action is so important that you are required to confirm it with a modal. Please click
                one of these buttons to proceed.
            </Text>
        ),
        labels: { confirm: 'Confirm', cancel: "Cancel" },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed'),
    });

    // Not working
    // const openContextModal = () =>
    //     modals.openContextModal('demonstration', {
    //         title: 'Test modal from context',
    //         modalBody:
    //             'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
    //     });

    const openContentModal = () => {
        const id = modals.openModal({
            title: 'Subscribe to newsletter',
            children: (
                <>
                    <TextInput label="Your email" />
                    <Button fullWidth onClick={() => modals.closeModal(id)}>
                        Submit
                    </Button>
                </>
            ),
        });
    };

    const openMultiStepModal = () =>
        modals.openConfirmModal({
            title: 'Please confirm your action',
            closeOnConfirm: false,
            labels: { confirm: 'Next modal', cancel: 'Close modal' },
            children: (
                <Text size="sm">
                    This action is so important that you are required to confirm it with a modal. Please click
                    one of these buttons to proceed.
                </Text>
            ),
            onConfirm: () =>
                modals.openConfirmModal({
                    title: 'This is modal at second layer',
                    labels: { confirm: 'Close modal', cancel: 'Back' },
                    closeOnConfirm: false,
                    children: (
                        <Text size="sm">When this modal is closed modals state will revert to first modal</Text>
                    ),
                    onConfirm: () => modals.closeAll(),
                }),
        });

    return (
        <Group position="center">
            <Button onClick={openDeleteModal} color="red">Delete account</Button>
            <Button onClick={openConfirmModal}>Open confirm modal</Button>
            {/* <Button onClick={openContextModal}>Open demonstration context modal</Button> */}
            <Button onClick={openContentModal}>Open content modal</Button>
            <Button onClick={openMultiStepModal}>Open multiple steps modal</Button>
        </Group>
    );
};

export default ModalsDemo;