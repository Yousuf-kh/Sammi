import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const [input, setInput] = useState("");
  const toast = useToast();
  const send = () => {
    toast({
      title: "Xabar Yuborildi",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setInput(" ");
  };

  return (
    <Box w={"full"} pt={10}>
      <Container maxW={"container.lg"}>
        <Box
          w={"50%"}
          mx={"auto"}
          border={"1px solid #ccc"}
          borderRadius={"10px"}
          px={10}
          py={3}
        >
          <Heading pb={5} fontSize={"25px"} textAlign={"center"}>
            Yangiliklardan xabardor bo'ling
          </Heading>
          <Flex gap={3} pb={2}>
            <Input
              onChange={(e) => setInput(e.target.value)}
              placeholder="Email"
              type="email"
            />
            <Button onClick={() => send()} colorScheme="green">
              Yuborish
            </Button>
          </Flex>
          <Text textAlign={"center"}>Hech qanday spam olmaysiz! ✌️</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
