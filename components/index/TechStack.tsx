import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Tag,
    TagLabel,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { DiMongodb } from 'react-icons/di';

import TechItem from './TechItem';

const TeachStack = () => {
    const bg = useColorModeValue('#D0D0D0', '#0B161D');

    return (
        <Box h={{ base: 'fit-content' }} bg={bg} rounded={20}>
            <VStack ml={{ base: 4, md: 8 }} mr={{ base: 4, md: 8 }}>
                <Heading
                    textAlign={'left'}
                    fontWeight={'semibold'}
                    textDecoration={'underline'}
                    fontSize={42}
                    textDecorationColor={'yellow.300'}
                    alignSelf={{ base: 'start', md: 'end' }}
                    mr={{ base: 0, md: 8 }}
                    mt={{ base: 2, md: 6 }}
                    ml={{ base: 6, md: 0 }}
                    mb={{ md: 4 }}
                >
                    Tech stack
                </Heading>
                <Flex
                    direction={{ base: 'row' }}
                    align={'start'}
                    justify={'start'}
                    w={'full'}
                    gap={4}
                >
                    <Grid
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                    >
                        <GridItem rowSpan={1} colSpan={4}>
                            <Flex justify={'center'}>
                                <Heading>Frameworks</Heading>
                            </Flex>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                            <TechItem label='MongoDB'>
                                <DiMongodb />
                            </TechItem>
                        </GridItem>
                    </Grid>
                    <Grid
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                    >
                        <GridItem rowSpan={1} colSpan={4}>
                            <Flex justify={'center'}>
                                <Heading>Languages</Heading>
                            </Flex>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                            <TechItem label='MongoDB'>
                                <DiMongodb />
                            </TechItem>
                        </GridItem>
                    </Grid>
                    <Grid
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                    >
                        <GridItem rowSpan={1} colSpan={4}>
                            <Flex justify={'center'}>
                                <Heading>Others</Heading>
                            </Flex>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                            <TechItem label='MongoDB'>
                                <DiMongodb />
                            </TechItem>
                        </GridItem>
                    </Grid>
                </Flex>
                <Box h={8} />
            </VStack>
        </Box>
    );
};

export default TeachStack;
