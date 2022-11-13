import { Box, GridItem, Tag, TagLabel } from '@chakra-ui/react';

interface TechItemProps {
    children: React.ReactNode;
    label: string;
}

const TechItem = ({ children, label, ...chakraProps }: TechItemProps) => {
    return (
        <GridItem {...chakraProps}>
            <Tag size={'lg'} borderRadius={'full'}>
                <Box ml={-1} mr={1}>
                    {children}
                </Box>
                <TagLabel>{label}</TagLabel>
            </Tag>
        </GridItem>
    );
};

export default TechItem;
