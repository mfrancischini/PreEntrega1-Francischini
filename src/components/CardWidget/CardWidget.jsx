import {
    Text,
    Stack,
    Avatar,
    AvatarBadge,
    Flex,
    Box
} from '@chakra-ui/react'
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { Input } from '@chakra-ui/react'
export function CardWidget() {


    return (

        <Flex direction={'row'} w='400px' h='400px' justifyContent='space-between'>


            <Input placeholder='Search' color='white' w={60} h={8} /><CiSearch size={30} color='white' />
            <Flex direction={'row'} w={'100px'} h={'100px'} gap={3}>   <CiShoppingCart size={30} color='white' /><Text color='white' fontSize='sm'>5</Text></Flex>

        </Flex>


    );

}
