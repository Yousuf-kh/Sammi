import { Box, Container, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCodepen } from "react-icons/ai";
import { DiCodeBadge } from "react-icons/di";
import { CiBarcode } from "react-icons/ci";
import { BsTelegram } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";

const Services = () => {
  const helper = [
    {
      title: "Frontend",
      text: "Web Dastur, Murakkab SPA Loyiha, Foydalanuvchi Interfeysi & API",
      icon: AiOutlineCodepen,
    },
    {
      title: "Backend",
      text: "Ma'lumotlar bazasi, Struktura, Microservice, Test",
      icon: DiCodeBadge,
    },
    {
      title: "Mobile",
      text: "IOS, Android, Dasturlar, Platforma, O'yin loyihalar",
      icon: CiBarcode,
    },
    {
      title: "Community",
      text: "Savol, Javob, Takliflar, Muloqot, Tanishuvlar",
      icon: BsTelegram,
    },
    {
      title: "Sun'iy Intelekt",
      text: "Model, TensorflowJS, Segmentatsiya, ChatGPT",
      icon: FaRobot,
    },
    {
      title: "Real Tajriba",
      text: "StartUP loyiha, Interview, Hard Skill, Soft Skill",
      icon: CiTempHigh,
    },
  ];

  return (
    <Box w={"full"} pt={10}>
      <Container maxW={"container.lg"}>
        <Heading color={"green.500"} py={5}>
          Takliflar
        </Heading>
        <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={6}>
          {helper.map((c, i) => (
            <Box border={"1px solid #ccc"} borderRadius={"10px"} p={5} key={i}>
              <Icon
                border={"1px solid transparent"}
                bg={"#999"}
                borderRadius={"100%"}
                p={3}
                fontSize={"70px"}
                as={c.icon}
                color={"#fff"}
              />
              <Text fontSize={"25px"} fontWeight={"600"}>
                {c.title}
              </Text>
              <Text fontSize={"18px"}>{c.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
