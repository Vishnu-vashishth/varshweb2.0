import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react';
import React from "react";
import FloatingWhatsApp from 'react-floating-whatsapp'
import WhatsappImg from '../../images/founder.JPG';
import Navbar from '../Navbar/Navbar';
import { Pane, FileUploader, FileCard } from 'evergreen-ui'
import Footer from '../Footer/Footer';
import {send} from "emailjs-com";
const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ ',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/',
  },
];

export default function JoinOurTeam() {
  const [files, setFiles] = React.useState([])
  const [fileRejections, setFileRejections] = React.useState([])
  const handleChange = React.useCallback((files) => setFiles([files[0]]), [])
  const handleRejected = React.useCallback((fileRejections) => setFileRejections([fileRejections[0]]), [])
  const handleRemove = React.useCallback(() => {
    setFiles([])
    setFileRejections([])
  }, []);

  const [toSend, setToSend] = React.useState({
    first_name: '',
    last_name: '',
    mobile_no: '',
    resume: files,
  });
            /* **************************************************************************** */
  const onSubmit = (e) =>{
    e.preventDefault();
    send(
      'service_s88ofh3',
      'template_6txakdm',
      toSend,
      'NhEBELELPCOpY21MZ'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }
  const handleChange1 = (e) =>{
    setToSend({...toSend,
    [e.target.name]:e.target.value});
  }
  const handleChange2 = e =>{
    setToSend(prevState=>({
      ...prevState,
      resume: files,
    }))
  }
  console.log({...toSend});
  console.log(files);
  return (<>
   <FloatingWhatsApp
        phoneNumber="+919264970728"
        accountName="Varsh Services"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
        notificationSound
        avatar ={WhatsappImg} 
        className ="whatsapp"
        statusMessage = ""
        chatMessage = "Welcome To Varsh"
      />
    {/* <Navbar/> */}
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 22 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Full-Stack Developers{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text">
              &
            </Text>{' '}
            SalesPerson
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              width={useBreakpointValue({ base: '44px', md: '60px' })}
              height={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Join our team
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              We’re looking for amazing salesperson just like you! Become a part
              of our rockstar sales team and skyrocket your career!
            </Text>
          </Stack>
          <Box as={'form'} mt={10} onSubmit={onSubmit}>
            <Stack spacing={4}>
            {/* /* **************************************************************************** */}
              <Input
                placeholder="Firstname"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                name='first_name'
                onChange={handleChange1}
                value={toSend.first_name}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="Lastname"
                bg={'gray.100'}
                border={0}
                name='last_name'
                color={'gray.500'}
                onChange={handleChange1}
                value={toSend.last_name}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="+91 (___) __-___-___"
                bg={'gray.100'}
                border={0}
                name='mobile_no'
                color={'gray.500'}
                onChange={handleChange1}
                value={toSend.mobile_no}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              
              <Pane maxWidth={500}>
      <FileUploader
        label="Upload Resume"
        description="Upload your resume. File can be up to 50 MB."
        maxSizeInBytes={50 * 1024 ** 2}
        maxFiles={1}
        onChange={handleChange}
        onRejected={handleRejected}
        renderFile={(file) => {
          const { name, size, type } = file
          
          const fileRejection = fileRejections.find((fileRejection) => fileRejection.file === file)
          const { message } = fileRejection || {}
          return (
            <FileCard
              key={name}
              isInvalid={fileRejection != null}
              name={name}
              onRemove={handleRemove}
              sizeInBytes={size}
              type={type}
              validationMessage={message}
            />
          )
        }}
        values={files}
        value={files}
      />
    </Pane>
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              type={'submit'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
    <Footer/>
    </>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="" />
      <circle cx="244" cy="106" r="139" fill="" />
      <circle cy="291" r="139" fill="" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="" />
    </Icon>
  );
};