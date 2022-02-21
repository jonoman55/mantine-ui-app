import { Paper, Box } from '@mantine/core';
import Header from './Header';
import Cards from './Cards';
import Buttons from './Buttons';
import Codes from './Codes';
import { SectionWrapper } from './Wrappers';

interface Props {
    colorScheme: string;
};

const Layout: React.FC<Props> = ({ colorScheme }) => (
    <Paper className='app' padding='lg' radius={0}>
        <Box className='app__header' mb='sm'>
            <Header colorScheme={colorScheme} />
        </Box>
        <Box className='app__container'>
            <SectionWrapper title='Cards Demo'>
                <Box className='app__flex' m='sm'>
                    <Cards />
                </Box>
            </SectionWrapper>
            <SectionWrapper title='Buttons Demo'>
                <Box className='app__flex' m='sm'>
                    <Buttons />
                </Box>
            </SectionWrapper>
            <SectionWrapper title='Code Demo'>
                <Box className='app__flex' m='sm' style={{ flexDirection: 'column' }}>
                    <Codes />
                </Box>
            </SectionWrapper>
        </Box>
    </Paper>
);

export default Layout;