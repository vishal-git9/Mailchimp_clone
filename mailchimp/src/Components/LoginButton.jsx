import { Flex,Button, } from "@chakra-ui/react"
export default function LoginButton({LoginPage,SignupPage}){
    return(
        <Flex gap={"10px"}>
        <Button
          as={'a'}
          fontSize={'sm'}
          fontWeight={400}
          cursor="pointer"
          variant={'outline'} onClick = {LoginPage}>
          Log in
        </Button>
        <Button
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'black'}
          bg={"#FFE01B"}
          _hover={{
            bg: "#FFE01B",
          }} onClick = {SignupPage}
        >
          Sign up
        </Button>
      </Flex>
    )
}