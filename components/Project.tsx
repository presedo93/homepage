import {Box, chakra, useColorModeValue} from '@chakra-ui/react';
import Image from 'next/image';

interface ProjectProps {
    children: React.ReactNode;
    image?: any;
    props?: unknown;
}

const ProjectImage = chakra(Image, {
    shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height'].includes(prop),
});

const Project = ({children, image, ...props}: ProjectProps) => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D');

    return (
        <Box h={{base: 'fit-content'}} bg={bg} {...props} rounded={20}>
            <ProjectImage src={image} alt='MissingNo.' width={240} height={249} />
            {children}
        </Box>
    );
};

export default Project;
