import { Flex, GridItem, Heading } from '@chakra-ui/react';

interface TechTitleProps {
    title: string;
}

const TechTitle = ({ title }: TechTitleProps) => {
    return (
        <GridItem rowStart={0} colSpan={4}>
            <Flex justify={'center'}>
                <Heading as='h6' size={'md'}>
                    {title}
                </Heading>
            </Flex>
        </GridItem>
    );
};

export default TechTitle;
