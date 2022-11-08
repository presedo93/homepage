import { Box, Tag, TagLabel } from '@chakra-ui/react';

interface TechItemProps {
    children: React.ReactNode;
    label: string;
}

const TechItem = ({ children, label }: TechItemProps) => {
    return (
        <Tag size={'lg'} borderRadius={'full'}>
            <Box ml={-1} mr={1}>
                {children}
            </Box>
            <TagLabel>{label}</TagLabel>
        </Tag>
    );
};

export default TechItem;
