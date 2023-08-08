import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import {
  AiOutlineDashboard,
  AiFillFolder,
  AiOutlineContacts,
} from "react-icons/ai";

import { PiBooksLight } from "react-icons/pi";
import { FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  const navigations = [
    {
      name: "Bosh Sahifa",
      path: "/",
      icon: AiOutlineDashboard,
    },
    {
      name: "Kurslar",
      path: "/",
      icon: PiBooksLight,
    },
    {
      name: "Kod Manbalari",
      path: "/",
      icon: AiFillFolder,
    },
    {
      name: "Kontakt",
      path: "/",
      icon: AiOutlineContacts,
    },
    {
      name: "FAQ",
      path: "/",
      icon: FaQuestionCircle,
    },
  ];

  return (
    <Box
      w={"25%"}
      h={"90vh"}
      bg={"gray.100"}
      position={"fixed"}
      left={"0"}
      mt={"10vh"}
    >
      <Container maxW={"container.xl"}>
        <Flex pt={10} direction={"column"}>
          {navigations.map((c, i) => (
            <Box cursor={"pointer"} p={5} mt={4} key={i}>
              <Flex align={"center"} gap={2}>
                <Icon fontSize={"20px"} as={c.icon} />
                <Text fontSize={"20px"} fontWeight={"600"}>
                  {c.name}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Sidebar;
