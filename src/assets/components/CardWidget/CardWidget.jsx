import {
    Text,
    Stack,
    Avatar,
    AvatarBadge,
    Flex
} from '@chakra-ui/react'
import { CiShoppingCart } from "react-icons/ci";

export default function CardWidget() {


    return (

        <Flex direction={'row'} bg='blue.500' w='60px' h='40px' borderRadius='full' justifyContent={'center'} alignItems={'center'}>

            <CiShoppingCart size={30}/><Text color='white' fontSize='sm'>5</Text>

        </Flex>


    );

}
