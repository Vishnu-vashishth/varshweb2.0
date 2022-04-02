import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import AnimateLottie from "../../../AnimationLottie";
  import Lottie16 from "../../../lotties/lottie16.json";

  const features = [{
      id: 1,
      title: 'Social Media Marketing',
      text: 'We help you with social media management and advertising to help you grow your business and reach new clients.',
    },{
      id: 2,
      title: 'Content Marketing',
      text: 'Content marketing helps you increase online visibility, traffic and brand awareness. We offer effective content-writing that resonates with your target audience.',
    },{
      id: 3,
      title: 'Digital Marketing Strategy',
      text: "Every successful digital marketing campaign must be data-driven. We provides a clear path to measurably improve your performance and generate more leads and sales",
    },{
      id: 4,
      title: 'Dedicated Marketing Team',
      text: "We're here to solve common marketing challenges that are brought on by seasonality and unique to your industry. We manage your online marketing campaigns as if they were our own.",
    }];
  
  export default function GridListWithHeading() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Elevate your revenue with Varsh</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
          We help you engage with customers and convert them into positive leads with better sales through customer engagements. Our services help customers drive more revenue with quality marketing programs.
          </Text>
        </Stack>
      <AnimateLottie name={Lottie16} width={350} height={280} />
        <style>{`
@media only screen and (max-width: 480px) {
  .first_div{
    height: 0px;
    width: 100%;
    }
    }
        `}</style>
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }