import React from "react";
import Typewriter from 'typewriter-effect';
import img from "../../images/img.svg";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  Image, Heading,Text
} from "@chakra-ui/react";

const KuttyHero = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 6, lg: 20 }}
        py={24}
      >

        <chakra.h1
          mb={12}
          mt={10}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="110%"
        >
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Turning your digital
          </Text>{" "}
          <Typewriter
            options={{
              strings: [' visions into reality'],
              autoStart: true,
              loop: true,
              cursorClassName: "cursor",
            }}
          />

        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.900", "gray.400")}
          letterSpacing="wider"
        >
          Web development and CRM software services
          together with the finest marketing solutions to
          scale up your business rapidly.
        </chakra.p>
        <chakra.form w="full" mb={7}>
          <VisuallyHidden>Your Email</VisuallyHidden>
          <Box display={{ base: "block", lg: "none" }}>
            <Input
              size="lg"
              color="brand.900"
              type="email"
              placeholder="Enter your email..."
              bg="white"
              required="true"
            />
            <Button
              w="full"
              mt={2}
              color="white"
              variant="solid"
              colorScheme="black"
              bg="black"
              size="lg"
              type="submit"
            >
              Get Started
            </Button>
          </Box>
          <InputGroup size="lg" w="full" display={{ base: "none", lg: "flex" }}>
            <Input
              size="lg"
              color="brand.900"
              type="email"
              placeholder="Enter your email..."
              bg="white"
              required="true"
            />
            <InputRightElement w="auto">
              <Button
                color="white"
                variant="solid"
                colorScheme="black"
                bg="black"
                size="lg"
                type="submit"
                roundedLeft={0}
              >
                Get Started
              </Button>
            </InputRightElement>
          </InputGroup>
        </chakra.form>
       
      </Flex>
      <Box>
        <Image
          src={img}
          alt="3"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg=" "
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  );
};

export default KuttyHero;