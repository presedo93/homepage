import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Section from '../components/Section';
import AboutMe from '../components/index/AboutMe';
import TechStack from '../components/index/TechStack';

const Home: NextPage = () => {
    return (
        <>
            <Box h={12} />
            <Section delay={0.1}>
                <AboutMe />
            </Section>
            <Box h={12} />
            <Section delay={0.3}>
                <TechStack />
            </Section>
        </>
    );
};

export default Home;
