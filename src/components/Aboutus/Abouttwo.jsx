import React from "react";
import about1 from "../../images/aboutimg1.jpg";
import about2 from "../../images/aboutimg.jpg";
import Aboutone from './Aboutone'
import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue, Image,
} from "@chakra-ui/react";

export default function Asm() {
  return (
    <>
      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={5}
        w="full"
        justifyContent="center"
        alignItems="center"
        // pos="re"
      >
        <Box
          shadow="xl"
          bg={useColorModeValue("white", "gray.800")}
          px={8}
          py={20}
          mx="auto"
        >
          <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("gray.900", "gray.400")}
                lineHeight={{ md: "shorter" }}
              >
                Get Your Buissness Online
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "lg" }}
              >
                Our mission statement focuses on
                creating a consistent relationship
                with consumers since development
                marketing is not a nightstand;
                instead, it is a long-standing
                commitment that needs regular
                reviews to maintain a consistently
                high level of success
              </chakra.p>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bg={useColorModeValue("gray.900", "gray.700")}
                _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
                color={useColorModeValue("gray.100", "gray.200")}
                as="a"
              ><a href="https://drive.google.com/file/d/1UDVgiO6fNkpyHW-tb3IyZmXlmiSetku6/view?usp=sharing" target="__blank">
              Learn More
              </a>
              </Button>
            </Box>

            <Image
              src={about2}
              alt="3 women looking at a laptop"
              fit="cover"
              w="full"
              h={{ base: 64, md: "full" }}
              bg="gray.100"
              loading="lazy"
              opacity={1}
            />

          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, md: 2 }}
            flexDirection="column-reverse"
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box order={{ base: "none", md: 2 }}>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("gray.900", "gray.400")}
                lineHeight={{ md: "shorter" }}
              >
                Our Vision
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "lg" }}
              >
                Our vision is to enable
                customers to grow their firms
                and brands strategically while
                enhancing their web experiences
                by reaching and establishing
                dignified relationships with
                clients all over the world
              </chakra.p>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bg={useColorModeValue("gray.900", "gray.700")}
                _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
                color={useColorModeValue("gray.100", "gray.200")}
                as="a"
              >
              <a href="https://drive.google.com/file/d/1UDVgiO6fNkpyHW-tb3IyZmXlmiSetku6/view?usp=sharing" target="__blank">Learn More</a>
              </Button>
            </Box>
            <Image
              src={about1}
              alt="3 women looking at a laptop"
              fit="cover"
              w="full"
              h={{ base: 64, md: "full" }}
              bg="gray.100"
              loading="lazy"
              opacity={1}
            />
          </SimpleGrid>
        </Box>
      </Flex>



    </>
  );
}