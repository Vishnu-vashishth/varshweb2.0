import Tilt from 'react-tilt'
import {useEffect,useState} from "react"
import AOS  from 'aos';
import 'aos/dist/aos.css'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export default function ProductSimple({name,designation,image}) {

    useEffect(() => {
      AOS.init({
     offset: 200,
     duration: 600,
     easing: 'ease-in-sine',
     delay: 100,
    });
    AOS.refresh();
    
    }, []);


    return (
      <Center py={12}>
        <Box  data-aos="zoom-in-down"
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
          <Box 
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              // backgroundImage: `url(${})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <div className="Tilt-inner">  <Image
              rounded={'lg'}
              height={250}
              width={282}
              objectFit={'cover'}
              src={image}
            /></div>
           
          </Box>
          
        </Tilt>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.700'} fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} >
             {name}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800}>
              {designation}
            </Heading>
          </Stack>
        </Box>
      </Center>
    );
  }