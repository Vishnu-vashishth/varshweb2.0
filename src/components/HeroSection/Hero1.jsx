import React,{useState} from "react";
import Typewriter from 'typewriter-effect';
import img from "../../images/img.svg";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  Image,Text
} from "@chakra-ui/react";
import {send} from "emailjs-com";
const KuttyHero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("")
  const inputChangeHandler = e => {
    const value = e.target.value
    setEmail(e.target.value)
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
        value
      )
    ) {
      setError("Invalid Email")
    } else {
      setError("")
    }
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    send(
      'service_0n4qktb',
      'template_0b65r5y',
      email,
      'BWsIaUh8_t7hAkI1t'
    )
      .then((response) => {
        alert('SUCCESS!', response.status, response.text);
        window.location.reload();
      })
      .catch((err) => {
        console.log('FAILED...', err);
        window.location.reload();
      });
  }
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
        <chakra.form w="full" mb={7} onSubmit={handleSubmit}>
          <VisuallyHidden>Your Email</VisuallyHidden>
          <Box display={{ base: "block", lg: "none" }}>
            <Input
              size="lg"
              color="brand.900"
              type="email"
              placeholder="Enter your email..."
              bg="white"
              value={email}
              onChange={inputChangeHandler}
              required
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
          <p className="error">{error && error}</p>
          <style>{`
          .error{
            font-size: 15px;
            font-style: italic;
            font-weight: 501;
          }
          `}</style>
          <InputGroup size="lg" w="full" display={{ base: "none", lg: "flex" }}>
            <Input
              size="lg"
              color="brand.900"
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={inputChangeHandler}
              bg="white"
              required
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