import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsPersonRolodex } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const Road = () => {
  const icons = [
    { icon: RiComputerLine },
    { icon: MdKeyboardDoubleArrowRight },
    { icon: FaIdCard },
    { icon: MdKeyboardDoubleArrowRight },
    { icon: BsPersonRolodex },
  ];
  return (
    <Box w={"full"} py={10}>
      <Container maxW={"container.lg"}>
        <Flex justify={"space-between"}>
          {icons.map((c, i) => (
            <Icon key={i} fontSize={"100px"} as={c.icon} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Road;
