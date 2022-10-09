import { Box, useColorModeValue } from '@chakra-ui/react'
import { useEffect } from 'react'
import init from 'snake'

interface SnakeProps {
    reset: boolean
}

const Snake = ({ reset }: SnakeProps) => {
    const bg = useColorModeValue('#EEEBEB', '#12232E')

    // Set the board for the 1st time
    useEffect(() => {
        init().then(() => { })
    }, [reset])

    return (
        <>
            <Box
                id='root'
                bg={bg}
                textAlign={'center'}
                fontSize={'130%'}
                border={'1px'}
                borderColor={'gray.500'}
                w={250}
                h={250}
            />
        </>
    )
}

export default Snake
