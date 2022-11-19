import { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';

import Section from '../components/Section';
import Project from '../components/Project';

const NIDE = ['nvim', 'lua', 'zsh', 'iDE', 'tmux'];
const TWTS = ['fastAPI', 'React', 'PyTorch', 'Docker', 'streamlit'];

const Projects: NextPage = () => {
    return (
        <>
            <Box h={12} />
            <Section delay={'0.1'}>
                <Project
                    title={'n-ide'}
                    image={'/images/n_ide.jpg'}
                    reverse={false}
                    tags={NIDE}
                >
                    <Text mt={4} ml={{ base: 3, md: 12 }}>
                        VSCode is cool, isn&apos;t it? <b>NeoVim</b> can be cooler! This
                        project consists of all the <code>.dotfiles</code> that I tipically
                        use when I&apos; developing code!
                    </Text>
                    <Text mt={4} ml={{ base: 3, md: 12 }}>
                        Regarding the console, I like to use <code>zsh</code> and{' '}
                        <code>tmux</code> to handle all the sessiones needed. For the iDE
                        part, I have a setup using NeoVim and <code>lua</code> with some
                        plugins to make it fast and confortable.
                    </Text>
                </Project>
            </Section>
            <Box h={12} />
            <Section delay={'0.3'}>
                <Project
                    title={'tweesent'}
                    image={'/images/tweesent.jpg'}
                    reverse={true}
                    tags={TWTS}
                >
                    <Text mt={4} ml={{ base: 3, md: 12 }}>
                        Tweesent is a full stack project that offers an UI where the user
                        can input some text or a Twitter&apos;s username to search for
                        recent tweets. The main benefict of Tweesent is that it uses NLP to
                        classify those tweets in three categories, <b>negatives</b>,{' '}
                        <b>neutrals</b> and <b>positives</b>.
                    </Text>
                    <Text mt={4} ml={{ base: 3, md: 12 }}>
                        It is composed of three repos, one for the frontend using{' '}
                        <code>React</code>. The backend is done with <code>fastAPI</code>,
                        running the models with <code>ONNX</code> and the part of training
                        the models is developed with <code>PyTorch Lightning</code>. It also
                        has a <code>streamlit</code> UI interface to see how the
                        model&apos;s training develops.
                    </Text>
                </Project>
            </Section>
        </>
    );
};

export default Projects;
