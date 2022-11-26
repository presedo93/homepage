import {
    Box,
    Flex,
    Heading,
    HStack,
    Wrap,
    Tag,
    Text,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

interface ProjectProps {
    children: React.ReactNode;
    title: string;
    image?: any;
    reverse?: boolean;
    tags?: string[];
}

const ProjectImage = chakra(Image, {
    shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height'].includes(prop),
});

const Project = ({ children, title, image, reverse, tags }: ProjectProps) => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D');
    const rows = reverse ? 'row-reverse' : 'row';
    const heads = reverse ? 'start' : 'end';

    return (
        <Flex h={{ base: 'fit-content' }} bg={bg} rounded={20}>
            <Flex direction={{ base: 'column', md: rows }} m={8} align={'center'}>
                <ProjectImage
                    src={image}
                    alt='MissingNo.'
                    width={360}
                    height={240}
                    rounded={5}
                />
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
                    <HStack mt={4} ml={{ base: 3, md: 12 }}>
                        <Text>Tags: </Text>
                        <Wrap>
                            {tags != undefined &&
                                tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                        </Wrap>
                    </HStack>
                    <Box h={{ base: 0, md: 8 }} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Project;
