import React from "react";
import { Box, Flex, Image, Badge, useColorModeValue } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Cpwe = ({Heading,text,image}) => {

  const property = {
    imageUrl: image,
    imageAlt: text,
    title: Heading,
    
  };

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        // bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        // shadow="lg"
      >
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            
            {/* <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box> */}
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          

          <Box d="flex" mt="2" alignItems="center">
            
            
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Cpwe;