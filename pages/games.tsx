import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'

import Section from '../components/Section'

const Games: NextPage = () => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D')
    return (
        <>
            <Box h={12} />
            <Section delay={0.5}>
                <Box h='40vh' bg={bg} rounded={20}>
                    <Heading
                        textAlign={'center'}
                        fontWeight={'black'}
                        textDecoration={'underline'}
                        textDecorationColor={'yellow.300'}
                        fontSize={64}
                    >
                        GAMES
                    </Heading>
                    <Text textAlign={'center'} mt={6}>
                        This section shows some games done using Web Assembly.
                    </Text>
                </Box>
                <Box h={12} />
                <Box h='40vh' bg={bg} rounded={20}></Box>
            </Section>
        </>
    )
}

export default Games
