import { useState } from 'react';
import {
    Flex,
    Box,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Snake from './Snake';

const SnakeBoard = () => {
    const [reset, setReset] = useState<boolean>(false);
    const bgBox = useColorModeValue('#D0D0D0', '#0B161D');
    const bgIn = useColorModeValue('#EEEBEB', '#12232E');

    return (
        <Flex
            h={{ base: 'fit-content' }}
            bg={bgBox}
            rounded={20}
            alignItems={{ base: 'center', md: 'center' }}
            flexDirection={{ base: 'column', md: 'row' }}
        >
            <Flex
                flexDirection={'column'}
                ml={{ base: 0, md: 6 }}
                mt={{ base: 6, md: 0 }}
                bg={bgIn}
                p={6}
                rounded={40}
                w={'fit-content'}
                h={'fit-content'}
            >
                <Snake reset={reset} />
                <Flex mt={2} justifyContent={'center'}>
                    <Button
                        colorScheme={'red'}
                        size={'xs'}
                        w={'60%'}
                        onClick={() => {
                            setReset(!reset);
                        }}
                    >
                        Reset game
                    </Button>
                </Flex>
            </Flex>
            <Flex
                h={'full'}
                w={'full'}
                flexDirection={'column'}
                justifyContent={'start'}
            >
                <Heading
                    fontWeight={'semibold'}
                    textDecoration={'underline'}
                    textDecorationColor={'yellow.300'}
                    fontSize={32}
                    mt={6}
                    mr={8}
                    alignSelf={'end'}
                >
                    Snake
                </Heading>
                <Text mt={8} ml={{ base: 3, md: 12 }}>
                    Good old times playing the Snake game in the Nokia 3310, isn&apos;t
                    it? Let&apos; relive them! There it is a WASM version ready to be
                    played on your browser!
                </Text>

                <Text mt={8} ml={{ base: 3, md: 12 }}>
                    To play the game, you need to use the <strong>ASWD</strong> keys to
                    move the snake (or the keys present in the mobile version), it will
                    start once you reload or enter the page, but there is a Reset button
                    to start all over again and again and again...
                </Text>
                <Text mt={8} ml={{ base: 3, md: 12 }}>
                    Snake moves every 200ms and in this case 99% of the logic is directly
                    done in the WASM code. Most of the HTML/JS is contructed using{' '}
                    <code>web_sys</code>, so it means that CSS styles, child elements and
                    even the Event handlers have been developed in a super cool way!
                </Text>
                <Box h={{ base: 8 }} />
            </Flex>
        </Flex>
    );
};

export default SnakeBoard;
