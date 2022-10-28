import {
    Box,
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
                    <VStack ml={8} mr={8}>
                        <Heading
                            textAlign={'left'}
                            fontWeight={'semibold'}
                            textDecoration={'underline'}
                            fontSize={42}
                            textDecorationColor={'yellow.300'}
                            alignSelf={'end'}
                            mr={8}
                            mt={6}
                            mb={4}
                        >
                            About me...
                        </Heading>
                        <Box>
                            <Box
                                float={'left'}
                                mr={8}
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
                                Maybe we can live without libraries, people like you and me.
                                Maybe. Sure, we're too old to change the world, but what about
                                that kid, sitting down, opening a book, right now, in a branch
                                at the local library and finding drawings of pee-pees and
                                wee-wees on the Cat in the Hat and the Five Chinese Brothers?
                                Doesn't HE deserve better? Look. If you think this is about
                                overdue fines and missing books, you'd better think again. This
                                is about that kid's right to read a book without getting his
                                mind warped! Or: maybe that turns you on, Seinfeld; maybe that's
                                how y'get your kicks. You and your good-time buddies.
                            </Text>
                            <Text>
                                Maybe we can live without libraries, people like you and me.
                                Maybe. Sure, we're too old to change the world, but what about
                                that kid, sitting down, opening a book, right now, in a branch
                                at the local library and finding drawings of pee-pees and
                                wee-wees on the Cat in the Hat and the Five Chinese Brothers?
                                Doesn't HE deserve better? Look. If you think this is about
                                overdue fines and missing books, you'd better think again. This
                                is about that kid's right to read a book without getting his
                                mind warped! Or: maybe that turns you on, Seinfeld; maybe that's
                                how y'get your kicks. You and your good-time buddies.
                            </Text>
                        </Box>
                    </VStack>
                </Box>
            </Section>
        </>
    );
};

export default Home;
