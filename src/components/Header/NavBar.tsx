import { Flex, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export function Navbar() {
  return (
    <Flex align="center">
      <HStack spacing={10} mr="4" textAlign="right">

        <NextLink href='/' passHref >
          <Link fontWeight="bold" color="gray.100">Home</Link>
        </NextLink>
        <NextLink href='/sobre' passHref >
          <Link fontWeight="bold" color="gray.100">Sobre mim</Link>
        </NextLink>


      </HStack>
    </Flex>
  );
}