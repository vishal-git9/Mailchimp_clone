import {
  Box,
  Flex,
  Stack,
  Text,
  Image,
  Button,
  transition,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/Authcontext";
import { useRef,useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProductSidebar from "./sidebar"
import AvatarButton from "./Avatar";
import { useContext } from "react";
import LoginButton from "./LoginButton";
export default function Navbar() {
  // consuming the context
  const{AuthStatus} = useContext(AuthContext)
  const{isAuth,data} = AuthStatus
  console.log(isAuth)
  const navigate = useNavigate()
  // const getel = useRef(null)
  // const [isHovering, setIsHovering] = useState(false);
  const Products = useRef(null)
  const Inspiration = useRef(null)
  const Resources = useRef(null)
  // for pages
  const LoginPage = ()=>{
    return navigate("/login")
  }
  const SignupPage = ()=>{
    return navigate("/pricing")
  }
  const ProductsPage = ()=>{
    return navigate("/")
  }
  const PricingPage = ()=>{
    return navigate("/pricing")
  }

  

  return (
    <Box width="100%">
      <Box width={"100%"}
      display="flex"
      justifyContent={"space-around"}
      padding="20px 0px"
      alignItems={"center"}
      fontWeight="500"
      position={"fixed"} zIndex="2" backgroundColor={"white"}>
        
      <Flex justifyContent="space-around" gap={"40px"}>
        <Text
          _hover={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }} 
          ref={Products} onClick={ProductsPage}>
          Products
        </Text>
        <Text
          _hover={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          ref={Inspiration}
          // onClick={getInspiration}
        >
          Inspiration
        </Text>
        <Text
          _hover={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }} 
          ref={Resources}
          // onClick={getResources}
        >
          Resources
        </Text>
        <Text
          _hover={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }} 
          // onClick={getPricing}
          onClick={PricingPage}
        >
          Pricing
        </Text>
      </Flex>
      <Stack>
        <Image src="https://i.ibb.co/jkyhkNB/Light-mail.png" width={"150px"} height="50px" objectFit={"cover"}></Image>
        </Stack>
        {isAuth?<AvatarButton/>:<LoginButton LoginPage={LoginPage} SignupPage={SignupPage}/>}
      </Box>
      {/* <Box position={"sticky"} zIndex="1000" top={"0"} left="0" width={"50%"} > */}
      {/* {isHovering && (<ProductSidebar isHovering={isHovering}/>)} */}
      </Box>
    
  );
}
