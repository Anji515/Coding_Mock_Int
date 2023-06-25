import React from 'react'
import Nav from '../Components/Navbar'
import { Flex, Image, Text } from '@chakra-ui/react'
import { Box} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const History = () => {
    const images = [
        'https://i.ibb.co/88hzkxn/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-27.jpg',
        'https://i.ibb.co/rZ4dnT1/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-25.jpg',
        'https://i.ibb.co/88hzkxn/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-27.jpg',
        'https://i.ibb.co/rZ4dnT1/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-25.jpg',
        'https://i.ibb.co/rZ4dnT1/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-25.jpg',
        'https://i.ibb.co/88hzkxn/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-27.jpg',
        'https://i.ibb.co/rZ4dnT1/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-25.jpg',
        'https://i.ibb.co/88hzkxn/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-27.jpg',
        'https://i.ibb.co/88hzkxn/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-27.jpg',
        'https://i.ibb.co/rZ4dnT1/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-25.jpg',
        'https://i.ibb.co/88hzkxn/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-27.jpg',
        'https://i.ibb.co/rZ4dnT1/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-25.jpg',
        'https://i.ibb.co/rZ4dnT1/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-25.jpg',
        'https://i.ibb.co/88hzkxn/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-27.jpg',
        'https://i.ibb.co/rZ4dnT1/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-25.jpg',
        'https://i.ibb.co/88hzkxn/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-27.jpg',
      ];
    
      const renderImageSet = () => {
        const imageSets = [];
        const numSets = Math.ceil(images.length / 4);
    
        for (let i = 0; i < numSets; i++) {
          const imageSet = images.slice(i * 4, i * 4 + 4);
          const imagesElements = imageSet.map((image, index) => (
            <Image border={'0px solid blue'} key={index} src={image} alt={`Image ${index + 1}`} />
          ));
          imageSets.push(
            <Box paddingTop={'15%'} paddingRight={'15%'} paddingLeft={'15%'} gap={'10px'} zIndex={99} border={'0px solid red'} key={i} display="flex">
              {imagesElements}
            </Box>
          );
        }
        return imageSets;
      };
  return (
    <div>
    <Nav/>
    <Image opacity={0.5} position={'absolute'} w={'100%'} h={'120vh'} marginTop={'-100px'} src='https://i.ibb.co/gg9PFB5/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-23.jpg' alt='main image'/>
    <Flex justifyContent={'center'} gap={'10px'} >
        <Image width={'100px'} h={'80px'} src='https://i.ibb.co/dfcPVb8/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-38.jpg' alt='01'/>
        <Image width={'300px'} h={'40px'} src='https://i.ibb.co/KbXkLPv/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-37.jpg' alt='history'/>
    </Flex>
    <Text width={'50%'} margin={'auto'} textAlign={'left'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit, doloribus autem laborum in vitae sed repellat asperiores vel iure dolorum ipsa aut, ipsam recusandae. Alias reprehenderit accusantium rem dolore!
    Id voluptate aliquam vitae! Facilis, quisquam eaque nemo iure quae tenetur esse architecto accusantium similique fugiat possimus nesciunt perspiciatis perferendis hic adipisci dolor, sunt quidem ad cumque? Maxime, repudiandae laudantium.</Text>
    <Carousel border='1px solid red' showStatus={false} showThumbs={false} showArrows infiniteLoop>
      {renderImageSet()}
    </Carousel>
    </div>
  )
}

export default History