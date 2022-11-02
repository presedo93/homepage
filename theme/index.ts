import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props: any) => ({
        body: {
            bg: mode('#EEEBEB', '#12232E')(props),
        },
    }),
};

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
};

const fonts = {
    heading: 'Victor Mono',
    body: 'Victor Mono',
};

const theme = extendTheme({ config, fonts, styles });

export default theme;
