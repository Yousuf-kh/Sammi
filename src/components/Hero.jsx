import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { TbBrandJavascript } from "react-icons/tb";
import { GiAlarmClock } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineCropFree } from "react-icons/md";

const helper = [
  {
    text: "Umrbod Dostup",
    icon: GiAlarmClock,
  },
  {
    text: "Siz xohlagan joyda",
    icon: GoLocation,
  },
  {
    text: "Mukammal",
    icon: SiSimpleanalytics,
  },
  {
    text: "Bepul",
    icon: MdOutlineCropFree,
  },
];

const Hero = () => {
  return (
    <Box w={"full"}>
      <Container maxW={"container.lg"}>
        <Box border={"1px solid #ccc"} borderRadius={"10px"} px={4}>
          <Grid gridTemplateColumns={"70% 30%"} alignItems={"center"}>
            <Box>
              <Heading fontSize={"50px"} fontWeight={"600"}>
                <Box as={"span"} color={"green.500"}>
                  Yusuf
                </Box>{" "}
                - Dasturlash Kurslari
              </Heading>
              <Text fontSize={"20px"} mt={2}>
                Dasturlashga oid toliq va amaliy kurslarga boy platformaga xush
                kelibsiz. Bizda barcha pullik kurslarni bepulga organishingiz
                mumkin.
              </Text>
              <Flex
                border={"1px solid #ccc"}
                borderRadius={"10px"}
                p={2}
                mt={5}
              >
                {helper.map((c, i) => (
                  <Flex
                    key={i}
                    borderRight={i !== 3 ? "1px solid #ccc" : ""}
                    align={"center"}
                    px={2}
                  >
                    <Icon as={c.icon} />
                    <Text px={3} fontSize={"19px"}>
                      {c.text}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
            <TbBrandJavascript opacity={".4"} fontSize={"280px"} />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
