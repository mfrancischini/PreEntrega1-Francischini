import {
    Text,
    Stack,
    Avatar,
    AvatarBadge
} from '@chakra-ui/react'

export default function CardWidget() {
    const hayCarrito = true;

    return (
        
        <Stack direction='row' spacing={4}>
            <Avatar position="relative">
                {hayCarrito ? (
                    <AvatarBadge
                        boxSize='1.25em'
                        bg='blue.500'
                        borderColor='transparent'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Text color='white' fontSize='sm'>5</Text>
                    </AvatarBadge>
                ) : null}
            </Avatar>
        </Stack>
        
    );
    
}
