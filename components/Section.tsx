import React from 'react';
import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyleDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop) || prop === 'transition';
    },
});

interface SectionProps {
    children: React.ReactNode;
    delay: string;
}

const Section = ({ children, delay = '0' }: SectionProps) => {
    return (
        <StyleDiv
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: '0.8', delay: delay }}
            mb={6}
        >
            {children}
        </StyleDiv>
    );
};

export default Section;
