import { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';

import Section from '../components/Section';
import Project from '../components/Project';

const Projects: NextPage = () => {
    return (
        <>
            <Box h={12} />
            <Section delay={0.1}>
                <Project title={'n-ide'} image={'/images/n_ide.jpg'} reverse={false}>
                    <Text mt={4} ml={{ base: 3, md: 12 }}>
                        Do you remember the coolest game in Windows 3.x? The legenday
                        Minesweeper is here and it can be played directly in your browser!
                    </Text>

                    <Text mt={4} ml={{ base: 3, md: 12 }}>
                        This version of the game is done using WebAssembly. The code was
                        developed in Rust and integrated in this webpage so it can be played
                        just by opening the page.
                    </Text>
                </Project>
            </Section>
            <Box h={12} />
            <Section delay={0.3}>
                <Project title={'tweesent'} image={'/images/n_ide.jpg'} reverse={true}>
                    <Text mt={4} ml={{ base: 3, md: 12 }}>
                        Do you remember the coolest game in Windows 3.x? The legenday
                        Minesweeper is here and it can be played directly in your browser!
                    </Text>

                    <Text mt={4} ml={{ base: 3, md: 12 }}>
                        This version of the game is done using WebAssembly. The code was
                        developed in Rust and integrated in this webpage so it can be played
                        just by opening the page.
                    </Text>
                </Project>
            </Section>
        </>
    );
};

export default Projects;
