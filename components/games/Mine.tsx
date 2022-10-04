import { Box, Grid, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState, MouseEvent } from 'react'
import init, { getState, openField, toggleFlag } from 'minesweeper'

const Mine = () => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D')
    const [data, setData] = useState<string[][]>([])
    const [render, setRender] = useState<number>(0)

    const fetchState = () => {
        let state = getState()
            .split('\n')
            .map((row) => row.trim().split(/\s+/))
        state.pop()
        setData(state)
    }

    // Set the board for the 1st time
    useEffect(() => {
        init().then(() => {
            fetchState()
        })
    }, [])

    // Update the board based on 'render' changes.
    useEffect(() => {
        if (render > 0) fetchState()
    }, [render])

    // Handle the context menu event
    const toggleEvent = (event: MouseEvent, x: number, y: number) => {
        event.preventDefault()
        toggleFlag(x, y)
        setRender(render + 1)
    }

    // Handle the click event
    const openEvent = (event: MouseEvent, x: number, y: number) => {
        event.preventDefault()
        openField(x, y)
        setRender(render + 1)
    }

    return (
        <>
            {data.length && (
                <Grid
                    bg={bg}
                    display={'inline-grid'}
                    templateRows={`repeat(${data.length}, auto)`}
                    templateColumns={`repeat(${data[0].length}, auto)`}
                >
                    {data.map((row: string[], y: number) =>
                        row.map((cell: string, x: number) => (
                            <Box
                                key={x + y}
                                as={'a'}
                                href={'#'}
                                textDecoration={'none'}
                                textAlign={'center'}
                                fontSize={'130%'}
                                lineHeight={1}
                                w={6}
                                h={6}
                                onClick={(event: MouseEvent) => openEvent(event, x, y)}
                                onContextMenu={(event: MouseEvent) => toggleEvent(event, x, y)}
                            >
                                {cell}
                            </Box>
                        ))
                    )}
                </Grid>
            )}
        </>
    )
}

export default Mine
