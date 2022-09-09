import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <>
            <Heading as='h2' variant='page-title'>
                <p>Here</p>
            </Heading>
            <Box
                borderRadius='lg'
                bg='aqua'
                h='12'
                display='flex'
                alignItems='center'
            >
                <div>Hello to my homepage</div>
            </Box>
            <Box h='500px' id='aboutme'>
                <p>About me</p>
            </Box>
            <Box h='500px' id='projects'>
                <p>Projects</p>
            </Box>
            <Box h='500px' id='games'>
                <p>Games</p>
            </Box>
            <Box h='500px' id='apis'>
                <p>APIs</p>
            </Box>
        </>
    )
}

export default Home
