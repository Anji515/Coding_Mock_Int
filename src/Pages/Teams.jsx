import React from 'react'
import Nav from '../Components/Navbar'
import { Flex, Image } from '@chakra-ui/react'

const Teams = () => {
  return (
    <div>
        <Nav/>
        <Flex justifyContent={'center'} gap={'10px'} >
        <Image width={'100px'} h={'80px'} src='https://i.ibb.co/gWsBr4B/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-42.jpg' alt='01'/>
    </Flex>
        <Image opacity={0.7} position={'absolute'} w={'100%'} h={'120vh'} marginTop={'-200px'} src='https://i.ibb.co/v3XXWHG/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-7.jpg' alt='Teams'/>
    </div>
  )
}

export default Teams