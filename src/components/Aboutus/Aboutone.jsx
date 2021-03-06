import React from "react";
import img from "../../images/img1.svg";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
export default function Wfl() {
  const Feature = (props) => {
    return (
      <Flex>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue("brand.500", "brand.300")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
        <chakra.p
          fontSize="lg"
          color={useColorModeValue("gray.700", "gray.400")}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Flex 
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={5}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box 
        shadow="xl"
        bg={useColorModeValue("white", "gray.900")}
        px={8}
        py={20}
        
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
          <Image
          src={img}
          alt="4"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg=""
          loading="lazy"
        />
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Become a Partner
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Let's put our heads together to build a successful partnership to
              benefit both your customers and your business.
            </chakra.p>
            <Button
              as="a"
              variant="solid"
              w={{ base: "full", sm: "auto" }}
              colorScheme="brand"
              size="lg"
            >
              Become a Partner
            </Button>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <Feature>Human Resource Management</Feature>
            <Feature>Software Development</Feature>
            <Feature>Customer Relationship Management</Feature>
            <Feature>WEBSITE Development</Feature>
            <Feature>CRM Software for every purpose</Feature>
            <Feature>Lead Generation</Feature>
            <Feature>Sales Generation</Feature>
            <Feature> Revenue Generation</Feature>
            <Feature>Online Marketing</Feature>
            <Feature>Professional Emails</Feature>
            <Feature> Branding</Feature>
            <Feature>Client Creation</Feature>
            <Feature> Investment</Feature>
            <Feature> Opportunities</Feature>

          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}