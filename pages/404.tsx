import NextLink from 'next/link';
import { Button, Flex, Link, Heading, Text, VStack } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <>
            <Flex h={'100vh'} align={'center'} justify={'center'}>
                <VStack>
                    <Flex mb={{ base: 12 }} direction={'column'}>
                        <Heading fontWeight={'bold'} fontStyle={'italic'}>
                            A martini. Shaken, not stirred.
                        </Heading>
                        <Text alignSelf={'end'} fontStyle={'italic'}>
                            {' '}
                            - James Bond.
                        </Text>
                    </Flex>
                    <NextLink href='/' passHref scroll={false}>
                        <Link>
                            <Button bg={'tomato'} fontWeight={'bold'} fontStyle={'italic'}>
                                Back to the... home?
                            </Button>
                        </Link>
                    </NextLink>
                </VStack>
            </Flex>
        </>
    );
};

export default NotFound;
