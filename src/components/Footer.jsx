import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <Box w={"full"} bg={"gray.100"} h={"10vh"} borderTop={"1px solid #ccc"}>
      <Container maxW={"container.lg"}>
        <Flex justify={"space-between"} align={"center"} h={"10vh"}>
          <Text>© 2023 Yusuf. Barcha huquqlar himoyalangan</Text>
          <HStack>
            <FaTelegram />
            <FaYoutube />
            <FaInstagram />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
