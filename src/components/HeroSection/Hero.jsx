import Typewriter from 'typewriter-effect';

import img from "../../images/img.svg";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';
import AnimationOffice from "../../lotties/lottie4.json";
import AnimationLottie from '../../AnimationLottie';

export default function CallToActionWithIllustration() {
  return (
    <div className="main">
      <Container maxW={'5xl'} >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>

          <Heading className="color-blue-dark tablet-view"
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>

            <Typewriter
              options={{
                strings: [' WEB Development & CRM Softwares along with   best Marketing'],
                autoStart: true,
                loop: true,
                cursorClassName:"cursor",
              }}
            />

            {' '}



            {/* <Text as={'span'} className="color-blue-dark" >
              best Marketing
            </Text> */}
          </Heading>


          <Heading className="color-blue-dark mobile-view"
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>

             WEB Development & CRM Softwares along with   best Marketing
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
              <a href="https://drive.google.com/file/d/1IKhFJZlxR0Xf3h3ulQspvJU1CzsT0y-G/view" target="__blank">
                Download Now
              </a>
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
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
   <img src = {img}/> 
    

  );
};