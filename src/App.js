import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';

function App() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Flex
          as="form"
          mx="auto"
          height="100vh"
          maxWidth="350px"
          onSubmit={onSubmit}
          direction="column"
          justifyContent="center"
        >
          <Input
            value={email}
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            mt="2"
            bg="black"
            type="submit"
            color="white"
            isLoading={loading}
            _hover={{ bg: 'gray.800' }}
            _active={{ bg: 'gray.600' }}
          >
            Subscribe
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
