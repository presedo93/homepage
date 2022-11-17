import { useState } from 'react';
import {
    Box,
    Flex,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Mine from './Mine';

const MineBoard = () => {
    const [reset, setReset] = useState<boolean>(false);
    const bgBox = useColorModeValue('#D0D0D0', '#0B161D');
    const bgIn = useColorModeValue('#EEEBEB', '#12232E');

    return (
        <Flex
            h={{ base: 'fit-content' }}
            bg={bgBox}
            rounded={20}
            alignItems={'center'}
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
                <Mine reset={reset} />
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
                    Minesweeper
                </Heading>
                <Text mt={8} ml={{ base: 3, md: 12 }}>
                    Do you remember the coolest game in Windows 3.x? The legenday
                    Minesweeper is here and it can be played directly in your browser!
                </Text>

                <Text mt={8} ml={{ base: 3, md: 12 }}>
                    This version of the game is done using WebAssembly. The code was
                    developed in Rust and integrated in this webpage so it can be played
                    just by opening the page.
                </Text>
                <Text mt={8} ml={{ base: 3, md: 12 }}>
                    Just left-click the boxes to discover its content (the number of mines
                    close to them) or right-click them to put a flag there. In case you
                    loose or want to start again the &apos;Reset game&apos; button is your
                    choice.
                </Text>
                <Box h={{ base: 8 }} />
            </Flex>
        </Flex>
    );
};

export default MineBoard;
