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
import {
    DiMongodb,
    DiRust,
    DiPython,
    DiReact,
    DiPostgresql,
} from 'react-icons/di';
import { FaVuejs, FaDocker } from 'react-icons/fa';
import {
    SiTensorflow,
    SiPytorch,
    SiFastapi,
    SiOpencv,
    SiVim,
    SiPytorchlightning,
} from 'react-icons/si';
import { TbBrandNextjs, TbSteeringWheel } from 'react-icons/tb';
import { BsGem } from 'react-icons/bs';

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
                    direction={{ base: 'column', xl: 'row' }}
                    align={{ base: 'center', xl: 'start' }}
                    justify={{ base: 'start', xl: 'center' }}
                    w={'full'}
                    gap={12}
                >
                    <Grid
                        templateRows='repeat(4, 1fr)'
                        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                        mt={{ base: 8, md: 0 }}
                        gap={4}
                    >
                        <TechTitle title='Web frameworks' />
                        <TechItem label='React'>
                            <DiReact />
                        </TechItem>
                        <TechItem label='NextJS'>
                            <TbBrandNextjs />
                        </TechItem>
                        <TechItem label='Vue'>
                            <FaVuejs />
                        </TechItem>
                        <TechItem label='fastAPI'>
                            <SiFastapi />
                        </TechItem>
                        <TechItem label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem label='PostgreSQL'>
                            <DiPostgresql />
                        </TechItem>
                        <TechItem label='Sinatra'>
                            <BsGem />
                        </TechItem>
                        <TechItem label='Actix'>
                            <TbSteeringWheel />
                        </TechItem>
                    </Grid>
                    <Grid
                        templateRows='repeat(3, 1fr)'
                        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                        gap={4}
                    >
                        <TechTitle title='Languages' />
                        <TechItem label='Rust'>
                            <DiRust />
                        </TechItem>
                        <TechItem label='TS/JS'>
                            <SiTypescript />
                        </TechItem>
                        <TechItem label='Python'>
                            <DiPython />
                        </TechItem>
                        <TechItem label='C++'>
                            <SiCplusplus />
                        </TechItem>
                        <TechItem label='Ruby'>
                            <SiRubygems />
                        </TechItem>
                        <TechItem label='Go'>
                            <SiGoland />
                        </TechItem>
                    </Grid>
                    <Grid
                        templateRows='repeat(3, 1fr)'
                        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                        gap={4}
                    >
                        <TechTitle title='ML & others' />
                        <TechItem label='Tensorflow'>
                            <SiTensorflow />
                        </TechItem>
                        <TechItem label='Pytorch'>
                            <SiPytorch />
                        </TechItem>
                        <TechItem label='MongoDB'>
                            <DiMongodb />
                        </TechItem>
                        <TechItem label='Lightning'>
                            <SiPytorchlightning />
                        </TechItem>
                        <TechItem label='Docker'>
                            <FaDocker />
                        </TechItem>
                        <TechItem label='NeoVim'>
                            <SiVim />
                        </TechItem>
                    </Grid>
                </Flex>
                <Box h={{ base: 2, xl: 8 }} />
            </VStack>
        </Box>
    );
};

export default TeachStack;
