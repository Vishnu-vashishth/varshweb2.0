import Typewriter from 'typewriter-effect';
import img1 from "../../images/img.svg";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  IconProps,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
export default function CallToActionWithIllustration() {
  return (
    <div className="main">
      <Container maxW={'5xl'} >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading className="color-blue-dark"
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>

            <Typewriter
              options={{
                strings: ['Turning your digital visions into reality'],
                autoStart: true,
                loop: true,
                cursorClassName:"cursor",
              }}
            />
            {' '}
          </Heading>
          <Heading className="color-blue-dark"
            fontWeight={400}
            fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
            lineHeight={'110%'}>

            Web development and CRM software services
            together with the finest marketing solutions to
            scale up your business rapidly.

          </Heading>
         
          <Text color={'gray.500'} maxW={'3xl'}>
            To Know More Download Our Brochure !!
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'cyan'}
              bg={'white.400'}
              _hover={{ bg: 'white' }}>
              <a href="https://drive.google.com/file/d/1UDVgiO6fNkpyHW-tb3IyZmXlmiSetku6/view?usp=sharing" target="__blank">
                Download Now
              </a>
            </Button>
            <Button rounded={'full'} px={6}>
            <NavLink exact="true" to="/about" id='underline'> Learn more</NavLink>
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>
      </Container>
    </div>
  );
}

export const Illustration = (props: IconProps) => {
  return (
   <img src={img1} alt="imag"/> 
  );
};