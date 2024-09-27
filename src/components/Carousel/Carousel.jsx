import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

import Slider from 'react-slick';

export function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Beauty',
      text: "Descubre la Belleza Natural que Hay en Ti, Transforma tu rutina con nuestros cosméticos de alta calidad. Ingredientes naturales.",
  image: 'https://firebasestorage.googleapis.com/v0/b/coderhouse-60030-ed75a.appspot.com/o/cosmeticos.jpg?alt=media&token=1894838b-14ff-47fe-a661-cbfd8ae67c4f',
      },
{
  title: 'Fragrances',
    text: "Explora nuestro exclusivo catálogo de fragancias y perfumes diseñados para resaltar tu personalidad.Desde aromas frescos y ligeros hasta notas intensas y sofisticadas.",
      image: 'https://firebasestorage.googleapis.com/v0/b/coderhouse-60030-ed75a.appspot.com/o/fragancias.jpg?alt=media&token=088d02d3-5068-415a-8f00-765d22a945ab'
      },

    ];

return (
  <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'}>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <IconButton
      aria-label="left-arrow"
      variant="ghost"
      position="absolute"
      left={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickPrev()}
    >
      <BiLeftArrowAlt size="40px" />
    </IconButton>
    <IconButton
      aria-label="right-arrow"
      variant="ghost"
      position="absolute"
      right={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickNext()}
    >
      <BiRightArrowAlt size="40px" />
    </IconButton>
    <Slider {...settings} ref={(slider) => setSlider(slider)}>
      {cards.map((card, index) => (
        <Box
          key={index}
        
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${card.image})`}
        >
          <Container size="container.lg" height="600px" position="relative">
            <Stack
              spacing={6}
              w={'full'}
              maxW={'lg'}
              position="absolute"
              top="15%"
              transform="translate(0, -50%)"
            >
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                {card.title}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                {card.text}
              </Text>
            </Stack>
          </Container>
        </Box>
      ))}
    </Slider>
  </Box>
);
  }
