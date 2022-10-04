import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'

import Section from '../components/Section'
import GameDesc from '../components/games/GameDesc'
import MineBoard from '../components/games/MineBoard'

const Games: NextPage = () => {
    return (
        <>
            <Box h={12} />
            <Section delay={0.1}>
                <GameDesc />
            </Section>
            <Box h={12} />
            <Section delay={0.3}>
                <MineBoard />
            </Section>
        </>
    )
}

export default Games
