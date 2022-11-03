import {
    Box,
    Flex,
    Heading,
    VStack,
    Text,
    useColorModeValue,
    chakra,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import Section from '../components/Section';

const ProfileImage = chakra(Image, {
    shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height'].includes(prop),
});

const Home: NextPage = () => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D');

    return (
        <>
            <Box h={12} />
            <Section delay={0.1}>
                <Box h={{ base: 'fit-content', xl: '86vh' }} bg={bg} rounded={20}>
                    <VStack ml={{ base: 4, md: 8 }} mr={{ base: 4, md: 8 }}>
                        <Heading
                            textAlign={'left'}
                            fontWeight={'semibold'}
                            textDecoration={'underline'}
                            fontSize={42}
                            textDecorationColor={'yellow.300'}
                            alignSelf={{ base: 'start', md: 'end' }}
                            mr={{ base: 0, md: 8 }}
                            mt={{ base: 2, md: 6 }}
                            ml={{ base: 6, md: 0 }}
                            mb={{ md: 4 }}
                        >
                            About me
                        </Heading>
                        <Flex
                            alignItems={{ base: 'center', md: 'unset' }}
                            display={{ base: 'flex', md: 'unset' }}
                            direction={{ base: 'column' }}
                        >
                            <Box
                                float={{ base: 'unset', md: 'left' }}
                                mt={{ base: 4, md: 0 }}
                                mr={{ base: 0, md: 8 }}
                                mb={{ base: 4, md: 8 }}
                                borderRadius={'full'}
                                borderStyle={'solid'}
                                borderColor={'yellow.300'}
                                borderWidth={2}
                                width={240}
                                height={240}
                            >
                                <ProfileImage
                                    src='/images/presedo.jpg'
                                    alt='Profile picture'
                                    borderRadius={'full'}
                                    width={240}
                                    height={240}
                                />
                            </Box>

                            <Text>
                                I'm Rene Presedo and this is my personal webpage, make yourself
                                at home 😁! I'm a software developer who has been working in
                                different fields for the last 6 years. Before getting down to
                                business, here it is a little bit about me:
                            </Text>
                            <br />
                            <Flex alignItems={'center'} direction={'column'}>
                                <Box ml={{ base: 8 }}>
                                    <Text mb={{ base: 4 }}>
                                        {'~~>'} 🌱 I really love to learn about new topics and new
                                        technologies. I'm not afraid of dealing with new challenges.
                                    </Text>
                                    <Text mb={{ base: 4 }}>
                                        {'~~>'} 👯 Along my carrer, I've worked as an embedded
                                        developer, also as a machine learning engineer, I've been
                                        involved in devops projects and lately I have started to
                                        focus in full stack development!
                                    </Text>
                                    <Text mb={{ base: 4 }}>
                                        {'~~>'} 🥅 Some goals: I would love to work in a lot of
                                        different projects but time is limited... lately I've been
                                        thinking on the idea of working on a reinforcement learning
                                        project with some focus on financial markets and create some
                                        mobile app to use it.
                                    </Text>
                                    <Text>
                                        {'~~>'} ⚡ As fun facts, I do really love football ⚽ and
                                        Dark Souls games. Well, I have to be honest, I love nearly
                                        all kind of video games hehe. But on my college years, Dark
                                        Souls saga was the main time consuming task in my life,{' '}
                                        <b>
                                            <i>Praise the sun!</i>
                                        </b>
                                    </Text>
                                </Box>
                            </Flex>
                            <br />
                            <Text mb={{ base: 4 }}>
                                Well... to be honest, most of my relevant info is the lines
                                above but we can make use of this section to talk a little bit
                                deeper :). I studied <b>Telecom engineer</b> but while I was
                                doing the degree I realized that what I was addicted to was to
                                coding. As in the degree all the coding subjects we had were
                                involved with electronics, I decided to study a master related
                                to that.
                            </Text>

                            <Text>
                                Once I finished my master's thesis, I felt that I needed some
                                real world working experience and found an opportunity as an
                                embedded software developer. Six years have passed since that
                                day, and two things that I can promise are that I learnt a lot
                                and that I enjoyed it a lot!
                            </Text>
                        </Flex>
                    </VStack>
                </Box>
            </Section>
        </>
    );
};

export default Home;
