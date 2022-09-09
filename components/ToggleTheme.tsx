import { AnimatePresence, motion } from 'framer-motion'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ToggleTheme = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <AnimatePresence mode='wait' initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label='Toggle theme'
                    colorScheme={useColorModeValue('teal', 'orange')}
                    icon={useColorModeValue(<BsFillMoonFill />, <BsFillSunFill />)}
                    onClick={toggleColorMode}
                ></IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ToggleTheme
