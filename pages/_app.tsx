import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../theme/index'

import type { AppProps } from 'next/app'

const Website = ({ Component, pageProps, router }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website
