import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Section from '../components/Section'

const Home: NextPage = () => {
    return (
        <>
            <Section delay={0.1}>
                <Heading as='h2' variant='page-title'>
                    <p>About me</p>
                </Heading>
                <Box h='100vh' id='aboutme' bg='red.100'>
                    <p>About me</p>
                </Box>
            </Section>
        </>
    )
}

export default Home
