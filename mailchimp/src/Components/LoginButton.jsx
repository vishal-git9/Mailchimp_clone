import { Flex,Button, } from "@chakra-ui/react"
export default function LoginButton({LoginPage,SignupPage}){
    return(
        <Flex gap={"10px"}>
        <Button
          variant="outline"
          borderRadius={"10px"}
          _hover={{
            backgroundColor: "#FFE01B",
            transition: ".5s",
          }} onClick = {LoginPage}
        >
          Log in
        </Button>
        <Button
          variant="outline"
          borderRadius={"10px"}
          _hover={{
            backgroundColor: "#FFE01B",
            transition: ".5s",
          }} onClick = {SignupPage}
        >
          Sign up
        </Button>
      </Flex>
    )
}