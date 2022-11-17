import {
    Box,
    Flex,
    Heading,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

interface ProjectProps {
    children: React.ReactNode;
    title: string;
    image?: any;
    reverse?: boolean;
}

const ProjectImage = chakra(Image, {
    shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height'].includes(prop),
});

const Project = ({ children, title, image, reverse }: ProjectProps) => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D');
    const rows = reverse ? 'row-reverse' : 'row';
    const heads = reverse ? 'start' : 'end';

    return (
        <Flex h={{ base: 'fit-content' }} bg={bg} rounded={20}>
            <Flex direction={{ base: 'column', md: rows }} m={8} align={'center'}>
                <ProjectImage src={image} alt='MissingNo.' width={360} height={240} />
                <Flex
                    h={'full'}
                    w={'full'}
                    flexDirection={'column'}
                    justifyContent={'start'}
                    mr={8}
                >
                    <Heading
                        fontWeight={'semibold'}
                        textDecoration={'underline'}
                        textDecorationColor={'yellow.300'}
                        fontSize={32}
                        mt={6}
                        mr={8}
                        ml={8}
                        alignSelf={heads}
                    >
                        {title}
                    </Heading>
                    {children}
                    <Box h={{ base: 8 }} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Project;
