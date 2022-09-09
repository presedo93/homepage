import React from 'react'
import {
    Container,
    Flex,
    Text,
    Box,
    Link,
    HStack,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'

import { AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import ToggleTheme from './ToggleTheme'

interface TextProps {
    text: string
    href?: any
}

const TextLink: React.FC<TextProps> = (props: TextProps) => {
    const scroll = () => {
        document.getElementById(props.href)?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <Link onClick={scroll}>
            <Text
                fontSize={{ base: '1.1rem', md: '1.5rem' }}
                fontStyle={{ base: 'normal', md: 'italic' }}
            >
                {props.text}
            </Text>
        </Link>
    )
}

const GitLink: React.FC = () => {
    return (
        <Link target='_blank' href='https://github.com/presedo93'>
            <AiFillGithub
                style={{
                    color: useColorModeValue('black', 'white'),
                    fontSize: '1.5rem',
                }}
            />
        </Link>
    )
}

const NavBar = () => {
    return (
        <Flex
            bg={useColorModeValue('#D0D0D090', '#0B161D99')}
            w='100%'
            h='60px'
            position='fixed'
            align='center'
            justify='space-between'
            zIndex={1}
        >
            <Container maxW='container.md'>
                <HStack display={{ base: 'none', md: 'flex' }} justify='space-between'>
                    <TextLink text='About me' href='aboutme' />
                    <TextLink text='Projects' href='projects' />
                    <TextLink text='Games' href='games' />
                    <TextLink text='APIs' href='apis' />
                    <GitLink />
                </HStack>
            </Container>

            <Flex mr={{ base: '12px', md: '24px' }} align='right'>
                <ToggleTheme />

                <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                    <Menu isLazy id='navbar-menu'>
                        <MenuButton
                            as={IconButton}
                            icon={<GiHamburgerMenu />}
                            variant='outline'
                            arial-label='Options'
                        />
                        <MenuList>
                            <MenuItem>
                                <TextLink text='About me' href='aboutme' />
                            </MenuItem>
                            <MenuItem>
                                <TextLink text='Projects' href='projects' />
                            </MenuItem>
                            <MenuItem>
                                <TextLink text='Games' href='games' />
                            </MenuItem>
                            <MenuItem>
                                <TextLink text='APIs' href='apis' />
                            </MenuItem>
                            <MenuItem>
                                <Box mr={2}>Source</Box>
                                <GitLink />
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Flex>
    )
}

export default NavBar
