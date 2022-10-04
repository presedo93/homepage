import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const GameDesc = () => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D')

    return (
        <Box h='40vh' bg={bg} rounded={20}>
            <Heading
                textAlign={'center'}
                fontWeight={'black'}
                textDecoration={'underline'}
                fontSize={64}
                textDecorationColor={'yellow.300'}
            >
                GAMES
            </Heading>
            <Text textAlign={'center'} mt={6}>
                This section shows some games done using Web Assembly.
            </Text>
        </Box>
    )
}

export default GameDesc
