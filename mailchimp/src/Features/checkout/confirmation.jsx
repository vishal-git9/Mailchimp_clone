import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Image,
  Stack,Text
} from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";
import { AuthContext } from "../../Context/Authcontext";
import { useEffect } from "react";
import payment_sucess from "../../Images/payment_sucess.gif"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
export default function Confirmation() {
    const {setAuthStatus} = useContext(AuthContext)
    setAuthStatus({
        isAuth:true,
        data:null
    })
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/infoForm")
        },5000)
    },[])
  return (
    <Stack alignItems={"center"} mt="150px">
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px" bgColor={"white"}>
        <Image src={payment_sucess} width="100px"></Image>
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Payment Succesful!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thanks for subscribing LightMail.
      </AlertDescription>
    </Alert>
    <CircularProgress isIndeterminate color='green.300' />
    <Text fontWeight={"500"}>
    Creating form for you...
    </Text>
    </Stack>
  );
}
