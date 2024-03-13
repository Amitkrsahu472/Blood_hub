import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/i1.jpg';
import img2 from '../Assets/i2.jpg';
import img3 from '../Assets/31.webp';
import img4 from '../Assets/i4.jpg';
import img5 from '../Assets/i5.png';

const Home = () => {
  return (
    <Box  bg="black" color="white">
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(0deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
           Donating blood is a selfless act that holds the power to save lives and make a lasting impact on the well-being of others. Imagine being the hero who provides the lifeline for someone in need, bridging the gap between life and death. Every drop of blood you contribute can be a source of hope for patients battling illnesses, undergoing surgeries, or facing unforeseen emergencies. Your decision to donate blood is a testament to your compassion and humanity, showcasing the incredible capacity for individuals to come together for the greater good.

Blood is a precious resource that cannot be manufactured or replicated; it relies solely on the generosity of donors. By donating blood, you become a silent hero, silently combating illnesses, accidents, and medical emergencies. Hospitals and healthcare facilities are in constant need of a stable blood supply to meet the demands of patients, and your donation ensures that this essential resource is readily available when required. Whether it's a family member, a friend, or a complete stranger, your act of kindness could be the difference between life and death.

Moreover, the benefits of blood donation extend beyond the immediate impact on recipients. Regular blood donation has been linked to health benefits for donors, including a reduced risk of certain diseases and an improved overall sense of well-being. So, let's join hands and make a commitment to donate blood regularly, knowing that each contribution has the potential to make a significant and positive difference in the lives of those in need. Your decision to donate blood is not just a donation; it's a gift of life, a gift that keeps on giving.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Box  bg="pink" color="white">
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    bg="green"
  >
      <Box w="70%" h={['40', '600']} mx="auto"  mt="4" mb="4" border="30px solid #f0071b" >
      <Image src={img1} h={['40', 'full']} w={'70%'} objectFit={'cover'} mx="auto"  />
    </Box>
    <Box w="70%" h={['40', '600']} mx="auto" mt="4" mb="4" border="30px solid #f0071b">
      <Image src={img2} h={['40', 'full']} w={'70%'} objectFit={'cover'} mx="auto" />
    </Box>
    <Box w="70%" h={['40', '600']} mx="auto"  mt="4" mb="4" border="30px solid #f0071b">
      <Image src={img3} h={['40', 'full']} w={'70%'} objectFit={'cover'} mx="auto" />
    </Box>
    <Box w="70%" h={['40', '600']} mx="auto"  mt="4" mb="4" border="30px solid #f0071b">
      <Image src={img4} h={['40', 'full']} w={'70%'} objectFit={'cover'} mx="auto" />
    </Box> 
  </Carousel>
  </Box>
);

export default Home;