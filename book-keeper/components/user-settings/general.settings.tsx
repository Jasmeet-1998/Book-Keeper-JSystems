import { Avatar, Flex, Icon, IconButton, Text, Divider, Stack, Heading, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, Switch } from '@chakra-ui/react';
import React from 'react';
import { AiFillCamera, AiFillEdit, AiOutlineAlert, AiOutlineUser } from 'react-icons/ai';


const GeneralSettings = () => {
    return (
        <>
            <Flex
                w="100%"
                h="80%"
                p={3}
                mt={[-10,-10,5,5,5]}
                mb={1}
                display="flex"
                flexDir="column"
                marginLeft={[3,2,17,20,20]}
            >

                <Flex
                    w="100%"
                    h="100%"
                    display="flex"
                    flexDir="column"
                    
                >
                    <Flex
                        mt={-5}
                        h={["33%","27%","6%","8%","10%"]}
                        
                        
                    >
                        <Divider orientation="vertical" borderColor="#D53F8C" />
                        <Divider orientation="vertical" borderColor="#D53F8C"/>
                        <Divider orientation="vertical" borderColor="#D53F8C" />
                        <Icon as={AiOutlineUser} fontSize="sm"></Icon>
                        <Heading color="purple.700" mt={[1,1,-1,-1,1]} ml={1.8} letterSpacing="tighter" fontWeight="semibold" fontSize={["2xl","normal","xl","2xl","3xl"]}>Basic</Heading>
                    </Flex>
                    <Flex
                        flexDir="row"
                        h={["33%","27%","23%","20%","16%"]}
                        
                    >
                        {/*🎈 make this dynamic a/c to current User Image */}
                        <IconButton
                            //onClick={onOpen} 
                            icon={<AiFillCamera />}
                            fontSize={["medium","medium","medium","large","x-large"]}
                            bgColor="gray.200"
                            borderRadius="100%"
                            // p="10px"
                            aria-label={'ChangePhoto'} 
                            _hover={{bg:"pink.200"}}
                        />            
                        <Flex
                            flexDir="column"
                        >
                            <Avatar size={["md","md","md","xl","xl"]} my={2} src="avatar-1.jpg" />
                        </Flex>
                        <IconButton
                                //onClick={onOpen} 
                                icon={<AiFillEdit />}
                                fontSize={["medium","medium","medium","large","x-large"]}
                                bgColor="gray.200"
                                borderRadius="100%"
                                aria-label={'EditUserBasicDetails'} 
                                _hover={{bg:"pink.200"}}
                        />
                        <Flex
                         flexDir="column"
                         ml={1}
                         mt={5}
                        >
                            {/*🎈 Make This Dynamic User Data make sure to show the username & Email in upper case*/}
                            <Text fontSize={["sm","sm","md","md","md"]} fontWeight="semibold" letterSpacing="tight" >Username: jasmeet.b 
                            </Text>
                            <Text fontSize={["sm","sm","md","md","md"]} fontWeight="semibold" letterSpacing="tight" >Email: jasmeet.bali@niche.com</Text>
                            <Text fontSize={["sm","sm","md","md","md"]} fontWeight="semibold" letterSpacing="tight" >Phone: 9871134488</Text>
                        </Flex>
                    </Flex>
                    <Flex
                        mt={5}
                        h={["33%","27%","6%","8%","10%"]}
                        
                    >

                        <Divider orientation="vertical" borderColor="#D53F8C" />
                        <Divider orientation="vertical" borderColor="#D53F8C"/>
                        <Divider orientation="vertical" borderColor="#D53F8C" />
                        <Icon as={AiOutlineAlert} fontSize="sm"></Icon>
                        <Heading color="purple.700" mt={[1,1,1,-1,1]} ml={1.8} letterSpacing="tighter" fontWeight="semibold" fontSize={["2xl","normal","xl","2xl","3xl"]}>Privacy & Security</Heading>
                    </Flex>
                    <Flex
                        flexDir="row"
                        mt={1}
                        h="100%"
                        w="100%"
                        
                    >
                        <TableContainer>
                            <Table size='sm'>
                            <Thead>
                                <Tr>
                                <Th>Update</Th>
                                <Th>Type</Th>
                                <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider" >Email & Phone</Td>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Security</Td>
                                <Td><IconButton
                                    //onClick={onOpen} 
                                    icon={<AiFillEdit />}
                                    fontSize="xs"
                                    bgColor="gray.200"
                                    borderRadius="100%"
                                    aria-label={'EditUserBasicDetails'} 
                                    _hover={{bg:"pink.200"}}
                                /></Td>
                                </Tr>
                                <Tr>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Email-Notifications</Td>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Privacy</Td>
                                <Td>
                                    <Switch 
                                    //onClick={} 
                                    colorScheme="pink"
                                    borderColor="gray.200">
                                    </Switch>
                                </Td>
                                </Tr>
                                <Tr>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Phone-Notifications</Td>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Privacy</Td>
                                <Td>
                                    <Switch 
                                    //onClick={} 
                                    colorScheme="pink"
                                    borderColor="gray.200">
                                    </Switch>
                                </Td>
                                </Tr>
                                <Tr>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Email-Subscription</Td>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Privacy</Td>
                                <Td>
                                    <Switch 
                                    //onClick={} 
                                    colorScheme="pink"
                                    borderColor="gray.200">
                                    </Switch>
                                </Td>
                                </Tr>
                                <Tr>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Password</Td>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Security</Td>
                                <Td><IconButton
                                    //onClick={onOpen} 
                                    icon={<AiFillEdit />}
                                    fontSize="xs"
                                    bgColor="gray.200"
                                    borderRadius="100%"
                                    aria-label={'EditUserBasicDetails'} 
                                    _hover={{bg:"pink.200"}}
                                /></Td>
                                </Tr>
                                <Tr>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">MFA</Td>
                                <Td color="purple.700" fontWeight="semibold" fontSize="sm" letterSpacing="wider">Security</Td>
                                <Td><IconButton
                                    //onClick={onOpen} 
                                    icon={<AiFillEdit />}
                                    fontSize="xs"
                                    bgColor="gray.200"
                                    borderRadius="100%"
                                    aria-label={'EditUserBasicDetails'} 
                                    _hover={{bg:"pink.200"}}
                                /></Td>
                                </Tr>
                            </Tbody>
                            </Table>
                            </TableContainer>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default GeneralSettings;