import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <Box w={"full"} pt={10}>
      <Container maxW={"container.lg"}>
        <Heading color={"green.500"} py={5}>
          Takliflar
        </Heading>
      </Container>
    </Box>
  );
};

export default Services;
