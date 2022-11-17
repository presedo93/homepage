import React from 'react';
import NextLink from 'next/link';
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
} from '@chakra-ui/react';

import { AiFillGithub } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import ToggleTheme from './ToggleTheme';

interface TextProps {
    children: React.ReactNode;
    href: string;
}

const TextLink: React.FC<TextProps> = ({ children, href }: TextProps) => {
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link textUnderlineOffset={6}>
                <Text
                    fontSize={{ base: '1.1rem', md: '1.5rem' }}
                    fontStyle={{ base: 'normal', md: 'italic' }}
                >
                    {children}
                </Text>
            </Link>
        </NextLink>
    );
};

const GitLink: React.FC = () => {
    return (
        <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/presedo93'
        >
            <AiFillGithub
                style={{
                    color: useColorModeValue('black', 'white'),
                    fontSize: '1.5rem',
                }}
            />
        </a>
    );
};

const NavBar = () => {
    return (
        <Flex
            bg={useColorModeValue('#D0D0D0', '#0B161D')}
            w='100%'
            h='60px'
            position='fixed'
            align='center'
            justify='space-between'
            zIndex={1}
        >
            <Container maxW='container.md'>
                <HStack display={{ base: 'none', md: 'flex' }} justify='space-between'>
                    <TextLink href='/'>About me</TextLink>
                    <TextLink href='/projects'>Projects</TextLink>
                    <TextLink href='/games'>Games</TextLink>
                    <TextLink href='/apis'>APIs</TextLink>
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
                                <TextLink href='/'>About me</TextLink>
                            </MenuItem>
                            <MenuItem>
                                <TextLink href='/projects'>Projects</TextLink>
                            </MenuItem>
                            <MenuItem>
                                <TextLink href='/games'>Games</TextLink>
                            </MenuItem>
                            <MenuItem>
                                <TextLink href='/apis'>APIs</TextLink>
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
    );
};

export default NavBar;
