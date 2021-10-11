import { ChakraProvider, Box, Flex, Container, Text, VStack,Input, InputGroup, InputLeftElement, FormLabel, FormControl,  Button } from "@chakra-ui/react"

import {  LockIcon } from '@chakra-ui/icons'

const App = () => (
  <ChakraProvider>
    <Container maxW="24rem" p="0" minH="100vh">
      <Flex minH="100vh" flexDirection="column" justifyContent="center">
        <Box w="100%"  m="auto" p="4" border="1px" borderColor="gray.200" rounded='2xl'>
          <form >
            <VStack spacing={4}>
              <Text as="h2" fontSize="3xl" textAlign="center">
                Login
              </Text>
              
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children="@"/>
                  <Input type="email" placeholder="bob@youruncle.com" />
                </InputGroup>
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<LockIcon  w={4} h={4}/>}/>
                  <Input type="password" placeholder="password" />
                </InputGroup>
              </FormControl>

              <Button w="100%" colorScheme="teal" size="md">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Container>
  </ChakraProvider>
  
);

export default App;
