import {
    Box,
    Flex,
    Grid,
    Heading,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    SiTypescript,
    SiCplusplus,
    SiRubygems,
    SiGoland,
} from 'react-icons/si';
import { DiMongodb, DiRust, DiPython } from 'react-icons/di';

import TechItem from './TechItem';
import TechTitle from './TechTitle';

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
                    justify={'center'}
                    w={'full'}
                    gap={12}
                >
                    <Grid
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                    >
                        <TechTitle title='Frameworks' />
                        <TechItem rowStart={2} colStart={1} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={2} colStart={2} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={2} colStart={3} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={3} colStart={1} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={3} colStart={2} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={3} colStart={3} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={4} colStart={1} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                    </Grid>
                    <Grid
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                    >
                        <TechTitle title='Languages' />
                        <TechItem rowStart={2} colStart={1} label='Rust'>
                            <DiRust />
                        </TechItem>
                        <TechItem rowStart={2} colStart={2} label='TS/JS'>
                            <SiTypescript />
                        </TechItem>
                        <TechItem rowStart={2} colStart={3} label='Python'>
                            <DiPython />
                        </TechItem>
                        <TechItem rowStart={3} colStart={1} label='C++'>
                            <SiCplusplus />
                        </TechItem>
                        <TechItem rowStart={3} colStart={2} label='Ruby'>
                            <SiRubygems />
                        </TechItem>
                        <TechItem rowStart={3} colStart={3} label='Go'>
                            <SiGoland />
                        </TechItem>
                    </Grid>
                    <Grid
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                    >
                        <TechTitle title='Others' />
                        <TechItem rowStart={2} colStart={1} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={2} colStart={2} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={2} colStart={3} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={3} colStart={1} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={3} colStart={2} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={3} colStart={3} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem rowStart={4} colStart={1} label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                    </Grid>
                </Flex>
                <Box h={8} />
            </VStack>
        </Box>
    );
};

export default TeachStack;
