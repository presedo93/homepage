import dynamic from 'next/dynamic'
import { Box, Grid, Button, useColorModeValue } from '@chakra-ui/react'
import { Suspense, useState } from 'react'

const DynamicMine = dynamic(() => import('./Mine'), {
    suspense: true,
})

const MineBoard = () => {
    const [play, setPlay] = useState(false)
    const bg = useColorModeValue('#D0D0D0', '#0B161D')

    return (
        <Grid h='40vh' bg={bg} rounded={20} alignContent={'center'}>
            <Box ml={6}>
                {!play && (
                    <Button
                        colorScheme={'yellow'}
                        onClick={() => {
                            setPlay(!play)
                        }}
                    >
                        Play the game
                    </Button>
                )}
                <Suspense>{play && <DynamicMine />}</Suspense>
            </Box>
        </Grid>
    )
}

export default MineBoard
