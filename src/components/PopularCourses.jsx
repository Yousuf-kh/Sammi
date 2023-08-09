import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsCardChecklist } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";

const PopularCourses = ({ courses }) => {
  return (
    <Box w={"full"} pt={20}>
      <Container maxW={"container.lg"}>
        <Heading py={5}>
          <Box as={"span"} color={"green.500"}>
            Mashxur
          </Box>{" "}
          Kurslar
        </Heading>
        <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={6}>
          {courses?.map((c) => (
            <Box
              p={4}
              border={"1px solid #ccc"}
              borderRadius={"10px"}
              key={c._id}
            >
              <Image
                borderRadius={"10px"}
                h={"400px"}
                src={c.previewImage}
                objectFit={"cover"}
                alt={"asd"}
              />
              <Text fontSize={"25px"} pt={2} fontWeight={"600"}>
                {c.title}
              </Text>
              <HStack py={2}>
                <HStack>
                  <TbBrandGoogleAnalytics />
                  <Text>{c.level}</Text>
                </HStack>
                <HStack>
                  <BsCardChecklist />
                  <Text>{c.totalLesson} darslar</Text>
                </HStack>
                <HStack>
                  <AiOutlineClockCircle />
                  <Text>{c.totalHour} soat</Text>
                </HStack>
              </HStack>
              <Flex
                borderTop={"1px solid #ccc"}
                align={"center"}
                justify={"space-between"}
                pt={3}
              >
                <Flex align={"center"} gap={2}>
                  <Image h={"40px"} borderRadius={"100%"} src="/yusuf.jpg" />
                  <Text fontSize={"20px"} fontWeight={"600"}>
                    Yusuf
                  </Text>
                </Flex>
                <Text fontWeight={"600"}>
                  <Box
                    fontWeight={"400"}
                    as={"span"}
                    textDecor={"line-through"}
                  >
                    {c.sale}.000
                  </Box>{" "}
                  Bepul
                </Text>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularCourses;
