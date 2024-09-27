import { useEffect, useContext } from "react";
import {
  Box,
  Heading,
  Flex,
  VStack,
  Text,
  Image,
  HStack,
  IconButton,
  Spacer,
  Divider,
  Alert,
  AlertIcon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);

export const CartDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartState, addItem, removeItem, deleteItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handleDeleteItem = (item) => {
    deleteItem(item);
  };


  const handlePayment = () => {
    MySwal.fire({
      title: "Confirmar compra",
      html: `
        <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
        <input type="text" id="apellido" class="swal2-input" placeholder="Apellido">
        <input type="email" id="email" class="swal2-input" placeholder="Email">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector('#nombre').value;
        const apellido = Swal.getPopup().querySelector('#apellido').value;
        const email = Swal.getPopup().querySelector('#email').value;

        if (!nombre || !apellido || !email) {
          Swal.showValidationMessage(`Por favor completa todos los campos`);
        }

        return { nombre, apellido, email };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const { nombre, apellido, email } = result.value;
        clearCart();

        onClose();
        navigate("/");
        MySwal.fire({
          title: "¡Compra confirmada!",
          text: `Gracias ${nombre} ${apellido}, te hemos enviado los detalles para el pago a ${email}.`,
          icon: "success"
        });

      }
      else {
        onClose();
        navigate("/");
      }
    });
  };

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>Detalles del Carrito</DrawerHeader>
        <DrawerBody>
          <Box w="100%">
            {cartState.length === 0 ? (
              setTimeout(() => {
                onClose();
                navigate("/");
              }, 5000),
              <Alert status="info" borderRadius="md">
                <AlertIcon />
                Tu carrito está vacío.
                <Spacer />
                <Link to="/">Ir a comprar</Link>

              </Alert>


            ) : (
              <VStack spacing={4} align="stretch">
                {cartState.map((item) => (
                  <Flex key={item.id} p={4} borderWidth="1px" borderRadius="md" alignItems="center" boxShadow="sm">
                    <Image src={item.thumbnail} alt={item.title} boxSize="75px" objectFit="cover" borderRadius="md" />
                    <Box flex="1" ml={4}>
                      <Text fontSize="md" fontWeight="bold">{item.title}</Text>
                      <HStack spacing={4} mt={2}>
                        <Text>Precio: ${item.price.toFixed(2)}</Text>
                        <HStack>
                          <IconButton
                            aria-label="Disminuir cantidad"
                            icon={<MinusIcon />}
                            size="sm"
                            onClick={() => removeItem(item)}
                            isDisabled={item.qtyItem === 1}
                          />
                          <Text>{item.qtyItem}</Text>
                          <IconButton
                            aria-label="Aumentar cantidad"
                            icon={<AddIcon />}
                            size="sm"
                            onClick={() => addItem(item)}
                            isDisabled={item.qtyItem >= item.stock}
                          />
                        </HStack>
                      </HStack>
                    </Box>
                    <Spacer />
                    <HStack>
                      <Text fontWeight="bold">Subtotal: ${(item.price * item.qtyItem).toFixed(2)}</Text>
                      <IconButton
                        aria-label="Eliminar producto"
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        variant="outline"
                        onClick={() => handleDeleteItem(item)}
                      />
                    </HStack>
                  </Flex>
                ))}
                <Divider />
                <Flex alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">Total: ${total.toFixed(2)}</Text>
                  <Spacer />

                  {/* Botón para Pagar */}
                  <Text
                    as="button"
                    onClick={handlePayment}
                    style={{ color: 'green', cursor: 'pointer' }}
                  >
                    Pagar
                  </Text>

                  <Spacer />
                  <Link to="/" style={{ color: 'blue' }}>Continuar Comprando</Link>
                </Flex>
              </VStack>
            )}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
