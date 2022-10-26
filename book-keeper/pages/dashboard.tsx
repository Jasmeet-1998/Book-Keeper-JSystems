import React,{ useState } from 'react';
import { 
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
    FormLabel,
    InputLeftAddon,
    DrawerFooter,
    InputRightAddon,
    Select,
    Textarea,
    Drawer,
} from "@chakra-ui/react";
import {
    AiFillPlusCircle,
    AiFillCreditCard,
    AiOutlineFileSearch,
    AiOutlineBell,
} from 'react-icons/ai';
import {
    FiPlus
} from 'react-icons/fi'
import Navbar from '../components/navbar';
import TxnList from '../components/txnlist.dashboard';

export default function dashboard(){ 
    const [card,selectCard] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclosure();


    return(
        <Flex
            h="100vh"
            flexDir="row"
            overflow="hidden"
            maxW="2000px"
        >
            
            <Navbar /> 
            
            <TxnList/>
            
            {/*📝 Search part + Card Slider part + credit/debit Total Funds related to all cards + [For Future Versions] Add new contact + Dispatch/Send funds Section */}
            <Flex
                w="30%"
                bgColor="#F5F5F5"
                p="3%"
                flexDir="column"
                overflow="auto"
            >
                {/*
                    📝 Search section make this dynamic to search contacts and display them via a pop up
                    📝 Notification Bell part[Add Drawer Section for notifications to display them on click, resource: https://chakra-ui.com/docs/components/list use unstyled list to show notifcation as Text inside drawer]
                */}
                <Flex alignContent="center">
                    <InputGroup bgColor="#fff" mb={4} border="none" borderColor="#1A202C" borderRadius="10px" mr={2}>
                        <InputLeftElement pointerEvents="none" children={<AiOutlineFileSearch color="#1A202C"/>} />
                        <Input type="number" placeholder="Search" borderRadius="10px"/>
                    </InputGroup>
                    
                    <IconButton 
                        icon={<AiOutlineBell />}
                        fontSize="md"
                        bgColor="#fff"
                        borderRadius="50%"
                        p="10px"
                        aria-label={'Notifications'} 
                    />
                    {/*🎈 make this notification count dynamic fetch data from db or redis to tackle this */}
                    <Flex
                        w={30}
                        h={25}
                        bgColor="#4FD1C5"
                        borderRadius="50%"
                        color="#fff"
                        align="center"
                        justify="center"
                        ml="-3"
                        mt="-2"
                        zIndex="100"
                        fontSize="xs"
                    >
                        2
                    </Flex>
                
                </Flex>
                <Heading letterSpacing="tighter" fontWeight="bold" display="inline-flex" fontSize="xl" >My Cards</Heading>
                {/**Card Sliding Selector 🎈 make sure to make this dynamic , also limit each user to 3 cards only via backend logic */}
                {card === 1 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, #F687B3, #29259A)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$5,750.20</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={AiFillCreditCard} />
                                    <Text>Keeper.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 1289</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">12/23</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={AiFillCreditCard} />
                            </Flex>
                        </Flex>
                    </Box> 
                }
                {card === 2 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, #F687B3, #29259A)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$5,750.20</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={AiFillCreditCard} />
                                    <Text>Keeper.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 3428</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">12/23</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={AiFillCreditCard} />
                            </Flex>
                        </Flex>
                    </Box> 
                }
                {card === 3 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, #F687B3, #29259A)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$5,750.20</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={AiFillCreditCard} />
                                    <Text>Keeper.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 9281</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">12/23</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={AiFillCreditCard} />
                            </Flex>
                        </Flex>
                    </Box> 
                }
                {/* selected card will be highlighted in selector bar just below card section*/}
                <Flex justifyContent="center" mt={2}>
                    <Button bgColor={card === 1? '#4FD1C5' : 'gray.300' } onClick={()=> selectCard(1)} size="xs" ms={1} />
                    <Button bgColor={card === 2? '#4FD1C5' : 'gray.300' } onClick={()=> selectCard(2)} size="xs" ms={1}/>
                    <Button bgColor={card === 3? '#4FD1C5' : 'gray.300' } onClick={()=> selectCard(3)} size="xs" ms={1}/>
                </Flex>
                
                {/*Overall Cards Meta Info Section- Accumalated Card balance, spent amount on cards, refilled amount in cards*/}
                <Flex flexDir="column" my={4}>
                    <Flex justify="space-between" mb={2}>
                        <Text>Credited</Text>
                        <Text fontWeight="bold">$135.45</Text>
                    </Flex>
                    <Flex justify="space-between" mb={2}>
                        <Text>Debited</Text>
                        <Text fontWeight="bold">$35.00</Text>
                    </Flex>
                    <Flex justify="space-between" mb={2}>
                        <Text>Balance</Text>
                        <Text fontWeight="bold">$100.45</Text>
                    </Flex>
                </Flex>

                {/*Send Money Section with Avatar grouping users*/}
                <Heading letterSpacing="tighter" fontWeight="bold" display="inline-flex" fontSize="xl" my={4}>Send money to</Heading>
                <Flex>
                    <AvatarGroup size="md" max={4}>
                        {/*🎈 loop over all the images of curent user contacts avatars */}
                        <Avatar src="avatar-2.jpg"/>
                        <Avatar src="avatar-2.jpg"/>
                        <Avatar src="avatar-2.jpg"/>
                        <Avatar src="avatar-2.jpg"/>
                        <Avatar src="avatar-2.jpg"/>
                        <Avatar src="avatar-2.jpg"/>
                    </AvatarGroup>
                    <Button onClick={onOpen} leftIcon={<FiPlus />} size="md" ml={2} colorScheme="teal" bgColor="gray.300">🎭</Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        size="sm"
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>
                            Add a new contact
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='contactname'>Name</FormLabel>
                                <Input
                                id='contactname'
                                placeholder='Please enter contact name'
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='contactemail'>Email</FormLabel>
                                <Input
                                id='contactemail'
                                placeholder='Please enter contact email'
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='contactphone'>Phone</FormLabel>
                                <Input
                                id='contactphone'
                                placeholder='Please enter contact phone'
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='cardtype'>Select Card Type</FormLabel>
                                <Select id='cardtype' defaultValue='segun'>
                                <option value='credit'>Credit</option>
                                <option value='debit'>Debit</option>
                                </Select>
                            </Box>
                            <Box>
                                <FormLabel htmlFor='cardNumber'>Card Number</FormLabel>
                                <Input
                                id='cardNumber'
                                placeholder='Please provide contact card number'
                                type="password"
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='confirmcardNumber'>Confirm Card Number</FormLabel>
                                <Input
                                id='confirmcardNumber'
                                placeholder='Please confirm contact card number'
                                type="password"
                                />
                            </Box>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue'>Add 🎭</Button>
                        </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Flex>
        </Flex>
    )
}