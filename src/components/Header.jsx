import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      position={"fixed"}
      top={"0"}
      left={"0"}
      w={"full"}
      bg={"gray.100"}
      h={"10vh"}
      borderBottom={"1px solid #ccc"}
      zIndex={"99"}
    >
      <Container maxW={"container.xl"}>
        <Flex justify={"space-between"} align={"center"} h={"10vh"}>
          <Link to={"/"}>
            <Heading cursor={"pointer"}>Yusuf</Heading>
          </Link>

          <Flex align={"center"} gap={2}>
            <Button>
              <FiSun />
            </Button>

            <Button>
              <AiOutlineMail />
            </Button>
            <Button>Kirish</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
