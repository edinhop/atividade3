import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6" >
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-center"
          flexDir='column'
        >
          <SimpleGrid columns={[2, null, 3]} spacing={10}>
          </SimpleGrid>


        </SimpleGrid>
      </Flex>
      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6" >
        <Box w='100%' p={4} color='white'>
          <Heading as='h2' size='2xl' fontWeight="bold" letterSpacing="tight" textAlign='center'>
            AirBnB
          </Heading>
          <br />
          <Text>
            Fiuk chorando, vaca entrando no meio de roça!, gil chamando pocah de Basculho, casca de pau, cambio de trator engastaindo, bebe chorando. Casca de pau,  moto estralando, máquina passando por coma da roça. Isso aqui ainda vai pegar fogo, cambio de trator engastaindo, bebe chorando.
          </Text>
          <br />
          <Text>
            Gaio de pau quebrando, cambio de trator engastaindo, equipamento estourando. Moto estralando tenénénénénénénénéné, biela batendo, equipamento estourando. Gaio de pau quebrando, cambio de trator engastaindo, engrenagem enpenando.
          </Text>
          <br />
          <Text>
            Aqueles bate boca,  moto estralando, bebe chorando, aqueles bate boca, cambio de trator engastaindo, bebe chorando. O cambio ficando vermei, rasteira baiana, equipamento estourando, bicicleta perdendo freio na descida, rasteira baiana, máquina passando por coma da roça. Moto estralando tenénénénénénénénéné, karol agarrando o Bill, engrenagem enpenando.
          </Text>
        </Box>
      </Flex>
      <Footer/>
    </Flex>
  );
}