import {
    Box,
    Flex,
    IconButton,
    Show,
    useColorModeValue,
} from '@chakra-ui/react';
import { MouseEvent, useEffect } from 'react';
import init, { render } from 'snake';

import {
    BsArrowUpSquareFill,
    BsArrowUpSquare,
    BsArrowLeftSquareFill,
    BsArrowLeftSquare,
    BsArrowRightSquareFill,
    BsArrowRightSquare,
    BsArrowDownSquareFill,
    BsArrowDownSquare,
} from 'react-icons/bs';

interface SnakeProps {
    reset: boolean;
}

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

const Snake = ({ reset }: SnakeProps) => {
    const bg = useColorModeValue('#EEEBEB', '#12232E');

    // Set the board for the 1st time
    useEffect(() => {
        init().then(() => { });
    }, [reset]);

    useEffect(() => {
        const interval = setInterval(() => {
            render();
        }, 200);
        return () => clearInterval(interval);
    });

    const handleDirection = (event: MouseEvent, dir: Direction) => {
        event.preventDefault();
        let key: string = '0';
        switch (dir) {
            case Direction.Up:
                key = 'w';
                break;
            case Direction.Down:
                key = 's';
                break;
            case Direction.Left:
                key = 'a';
                break;
            case Direction.Right:
                key = 'd';
                break;
            default:
                key = '0';
                break;
        }
        window.dispatchEvent(new KeyboardEvent('keydown', { key }));
    };

    return (
        <>
            <Box
                id='root'
                bg={bg}
                textAlign={'center'}
                fontSize={'130%'}
                border={'1px'}
                borderColor={'gray.500'}
                w={250}
                h={250}
            />
            <Show below='md'>
                <Flex justify={'center'} mt={2}>
                    <IconButton
                        aria-label='Move left'
                        colorScheme={useColorModeValue('teal', 'orange')}
                        icon={useColorModeValue(
                            <BsArrowUpSquareFill />,
                            <BsArrowUpSquare />
                        )}
                        onClick={(event: MouseEvent) =>
                            handleDirection(event, Direction.Up)
                        }
                    ></IconButton>
                </Flex>
                <Flex gap={4} justify={'center'} mt={2}>
                    <IconButton
                        aria-label='Move left'
                        colorScheme={useColorModeValue('teal', 'orange')}
                        icon={useColorModeValue(
                            <BsArrowLeftSquareFill />,
                            <BsArrowLeftSquare />
                        )}
                        onClick={(event: MouseEvent) =>
                            handleDirection(event, Direction.Left)
                        }
                    ></IconButton>
                    <IconButton
                        aria-label='Move down'
                        colorScheme={useColorModeValue('teal', 'orange')}
                        icon={useColorModeValue(
                            <BsArrowDownSquareFill />,
                            <BsArrowDownSquare />
                        )}
                        onClick={(event: MouseEvent) =>
                            handleDirection(event, Direction.Down)
                        }
                    ></IconButton>
                    <IconButton
                        aria-label='Move right'
                        colorScheme={useColorModeValue('teal', 'orange')}
                        icon={useColorModeValue(
                            <BsArrowRightSquareFill />,
                            <BsArrowRightSquare />
                        )}
                        onClick={(event: MouseEvent) =>
                            handleDirection(event, Direction.Right)
                        }
                    ></IconButton>
                </Flex>
            </Show>
        </>
    );
};

export default Snake;
