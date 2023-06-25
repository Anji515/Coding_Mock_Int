import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Nav from '../Components/Navbar'

const MainPage = () => {
  return (
    <div>
        <Nav/>
        {/* <Box height="100vh" width="100vw" display="flex" justifyContent="center" alignItems="center">
         <Image  src="https://i.ibb.co/NWhR2Kg/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-44.jpg" alt="Full Page Image" maxH="100%" maxW="100%" />
         </Box> */}
        <Box position="relative">
          <Box maxW={'100%'} h={'120vh'}>
        <Image  w={'100%'} h={'120vh'} marginTop={'-100px'} src='https://i.ibb.co/NWhR2Kg/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-44.jpg' alt='main image'/>
        <Text
          position="absolute"
          bottom={["400px","200px","400px"]}
          right={["200px","400px","650px"]}
          color="black"
          fontSize={["20px","30px","50px"]}
          fontWeight="bold"
          lineHeight={'45px'}
          >
          LOSANGELES
          <br />
          <Text color={'blue.700'}>MOUNTAINS</Text>
        </Text>
          </Box>
        </Box>
    </div>
  )
}

export default MainPage