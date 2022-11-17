import {NextPage} from 'next';
import {Box, Text} from '@chakra-ui/react';

import Section from '../components/Section';
import Project from '../components/Project';

const Projects: NextPage = () => {
    return (
        <>
            <Box h={12} />
            <Section delay={0.1}>
                <Project image={'/images/n_ide.jpg'}>
                    <Text>Tweesent</Text>
                </Project>
            </Section>
        </>
    );
};

export default Projects;
