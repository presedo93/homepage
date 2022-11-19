import { ReactNode } from 'react';
import { Router } from 'next/router';

import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import NavBar from './NavBar';

interface Props {
    children?: ReactNode;
    router?: Router;
}

const Layout = ({ children, router }: Props) => {
    return (
        <Box>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Rene Presedo (@presedo93)</title>
                <meta name='author' content='Rene Presedo' />
                <link rel='shortcut icon' href='/cpu.svg' type='image/x-icon' />
            </Head>

            <NavBar />

            <Container maxW='container.xl' pt={14}>
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
