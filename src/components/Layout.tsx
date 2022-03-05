import { Paper } from '@mantine/core';

import App from './AppContent';

const Layout: React.FC = () => (
    <Paper style={{ borderRadius: 0 }}>
        <App />
    </Paper>
);

export default Layout;