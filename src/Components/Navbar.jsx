import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom'

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={'none'} zIndex={99} position={'sticky'} top={0} left={0} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link to='/'><Image borderRadius={'50%'} width={'50px'} h={'50px'} src='https://i.ibb.co/n3Vs7x2/27145-5216d720a149eb947679d5903df127452fd4dac869f044850ed834dbc4e06953-51.jpg' alt='logo'/></Link>
          <Link to='/history'><Text color={'white'} textDecoration={'underline'}>History</Text></Link>
          <Link to='/teams'><Text color={'white'} textDecoration={'underline'}>Teams</Text></Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}