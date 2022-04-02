import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  interface FeatureProps {
    heading: string;
    text: string;
  }
  
  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function gridListWithCTA() {
    return (
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                OUR STEPS TOWARDS YOUR GROWTH
              </chakra.h2>
              <Button colorScheme="yellow" size="md">
              <a href='tel:+916387681558'>Call To Action</a>
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                We provide our customers a story they would enjoy keeping in mind
                the objectives of their website, marketing, planning, services and growth.
                of voice.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Research'}
            text={'Our lead generation process starts with finding out and understanding our client’s target audience. With this, we are able to generate better content that is engaging, helpful, and capable enough to turn them into positive leads.'}
          /> 
          <Feature
            heading={'Promotion'}
            text={'We adopt quality marketing programs in our lead generation work process such as creating and posting shareable content on social media platforms that serve the need of potential customers and then nurture them so that they end up developing long-term relationships.'}
          />
          <Feature
            heading={'Scoring'}
            text={'We score the existing leads for you depending upon how frequently they engage with your content and your business to develop a clear picture of the leads and make out how likely it is that they are going to be your customers.'}
          />
          <Feature
            heading={'Evaluation'}
            text={'As the last step, we perform constant analysis of the lead generation process that is being implemented to ensure if the routine is giving positive results or not, and if it doesn’t, we come up with finer solutions to convert your leads into customers.'}
          />
        </Grid>
      </Box>
    );
  }