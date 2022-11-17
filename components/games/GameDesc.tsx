import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const GameDesc = () => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D');

    return (
        <Box h={{ base: 'fit-content' }} bg={bg} rounded={20}>
            <Heading
                textAlign={'center'}
                fontWeight={'black'}
                textDecoration={'underline'}
                fontSize={56}
                textDecorationColor={'yellow.300'}
            >
                GAMES
            </Heading>
            <Text textAlign={'center'} mt={8}>
                This section shows some games done using Web Assembly. They have been
                developed in <code>Rust</code> and compiled using the{' '}
                <code>wasm-bidgen</code>!
            </Text>
            <Text textAlign={'center'} mt={4}>
                Web Assembly is getting more and more trending and having the
                opportunity of working with it with the most loved programming language
                for several years in Stack Overflow&apos;s surveys was a great chance
                not only to get more confident on using <code>Rust</code> but also on
                learning such cool tools!
            </Text>
            <Text
                textAlign={'center'}
                fontSize={'sm'}
                fontStyle={'italic'}
                textColor={useColorModeValue('red.400', 'cyan.400')}
                mt={2}
            >
                Most of the merits (99% to be honest) of developing the games are for{' '}
                yishn, he has several awesome rust projects in his youtube&apos;s
                channel (link{' '}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.youtube.com/c/yishn'
                >
                    <u>here</u>
                </a>
                )
            </Text>
            <Box h={{ base: 8 }} />
        </Box>
    );
};

export default GameDesc;
