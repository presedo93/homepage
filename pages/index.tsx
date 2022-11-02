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
                <Box h={{ base: 'fit-content', xl: '90vh' }} bg={bg} rounded={20}>
                    <VStack ml={{ md: 8 }} mr={{ base: 0, md: 8 }}>
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
                                mr={{ base: 0, md: 8 }}
                                mb={8}
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
                                I'm a Sofware Developer in between of two worlds! I love to do
                                Machine Learning but I also have a lot of fun doing Software
                                Development 🙃. Here it is a little bit about me:
                            </Text>
                            <br />
                            <Flex alignItems={'center'} direction={'column'}>
                                <Box>
                                    <Text>
                                        {'~~>'} 🌱 I’m currently learning about software
                                        architectures.
                                    </Text>
                                    <Text>
                                        {'~~>'} 👯 I’m looking to collaborate on cool projects!
                                        Lately, I've got some interest in financial ML ones.
                                    </Text>
                                    <Text>
                                        {'~~>'} 🥅 2022 Goals: work on a reinforcement learning
                                        project!
                                    </Text>
                                    <Text>
                                        {'~~>'} ⚡ Fun fact: I do really love football ⚽ and Dark
                                        Souls games.
                                    </Text>
                                </Box>
                            </Flex>
                            <Text>
                                I'm a Sofware Developer in between of two worlds! I love to do
                                Machine Learning but I also have a lot of fun doing Software
                                Development 🙃. Here it is a little bit about me:
                            </Text>
                            <Text>
                                I'm a Sofware Developer in between of two worlds! I love to do
                                Machine Learning but I also have a lot of fun doing Software
                                Development 🙃. Here it is a little bit about me:
                            </Text>
                            <Text>
                                I'm a Sofware Developer in between of two worlds! I love to do
                                Machine Learning but I also have a lot of fun doing Software
                                Development 🙃. Here it is a little bit about me:
                            </Text>
                            <Text>
                                I'm a Sofware Developer in between of two worlds! I love to do
                                Machine Learning but I also have a lot of fun doing Software
                                Development 🙃. Here it is a little bit about me:
                            </Text>
                            <Text>
                                I'm a Sofware Developer in between of two worlds! I love to do
                                Machine Learning but I also have a lot of fun doing Software
                                Development 🙃. Here it is a little bit about me:
                            </Text>
                            <Text>
                                I'm a Sofware Developer in between of two worlds! I love to do
                                Machine Learning but I also have a lot of fun doing Software
                                Development 🙃. Here it is a little bit about me:
                            </Text>
                            <Text>
                                I'm a Sofware Developer in between of two worlds! I love to do
                                Machine Learning but I also have a lot of fun doing Software
                                Development 🙃. Here it is a little bit about me:
                            </Text>
                        </Flex>
                    </VStack>
                </Box>
            </Section>
        </>
    );
};

export default Home;
