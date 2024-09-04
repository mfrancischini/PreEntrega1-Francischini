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
  Text,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CardWidget } from '../CardWidget';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ userName }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      py={4}
      backgroundImage="url('../../src/assets/background.jpg')"
      backgroundSize="cover"

    >
      <Flex h="400px" alignItems={'top'} justifyContent={'space-between'}>
        
        <Box>
          <img src="../../src/assets/logoDecorate.png" alt="logo" />
        </Box>
       
        <Flex justifyContent={'space-between'} gap={6} color={'white'}>
          <Text cursor="pointer"><Link to={"/"}>Home</Link></Text>
          <Text cursor="pointer"><Link to={"/products"}>Products</Link></Text>
          <Text cursor="pointer"><Link to={"/"}>Contact</Link></Text>
        </Flex>
        <Flex alignItems={'top'}>
        <CardWidget />
        
          <Stack direction={'row'} spacing={7}>
            {/* <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button> */}
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              > */}
                <Avatar size={'sm'} src={'../../src/assets/mariano.jpg'} />
              {/* </MenuButton> */}
              {/* <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar size={'2xl'} src={'../../src/assets/mariano.jpg'} />
                </Center>
                <br />
                <Center>
                  <p>{userName}</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList> */}
            {/* </Menu> */}
           
          </Stack>
        </Flex>
       
      </Flex>
    </Box>
  );
};

