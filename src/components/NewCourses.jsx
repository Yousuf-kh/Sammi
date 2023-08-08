import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const NewCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      const res = await axios.get("http://localhost:8000/api/all-courses");
      setCourses(res.data.courses);
    };
    getAllCourses();
    console.log(courses);
  }, []);
  return (
    <Box w={"full"}>
      <Container maxW={"container.lg"}>
        <Heading pb={5}>
          <Box as={"span"} color={"green.500"}>
            Yangi
          </Box>{" "}
          Kurslar
        </Heading>
        <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={10}>
          {courses
            ?.reverse()
            .slice(0, 3)
            .map((c) => (
              <Box
                border={"1px solid #ccc"}
                borderRadius={"10px"}
                p={4}
                key={c._id}
              >
                <Image
                  borderRadius={"10px"}
                  src={c.previewImage}
                  h={"200px"}
                  objectFit={"cover"}
                  alt={c.title}
                />
                <Text
                  fontSize={"20px"}
                  py={4}
                  fontWeight={"600"}
                  textAlign={"center"}
                >
                  {c.title}
                </Text>
                <Flex align={"center"} justify={"space-between"}>
                  <Button colorScheme="green" variant="outline">
                    Batafsil
                  </Button>
                  <Text>
                    <Box as={"span"} textDecor={"line-through"}>
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

export default NewCourses;
