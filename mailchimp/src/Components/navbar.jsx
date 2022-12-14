import {
  Box,
  Flex,
  Stack,
  Text,
  Image,
  Button,
  transition,
} from "@chakra-ui/react";
import { useRef,useState } from "react";
import ProductSidebar from "./sidebar"
export default function Navbar() {
  // const getel = useRef(null)
  const [isHovering, setIsHovering] = useState(false);
  const Products = useRef(null)
  const Inspiration = useRef(null)
  const Resources = useRef(null)
  const handleMouseOver = () => {
    setIsHovering(true);
    console.log(Products.current.innerText)
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Box position={"relative"} width="100%">
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
          ref={Products}
          onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
        >
          Pricing
        </Text>
      </Flex>
      <Stack>
        <Image
          src="https://i.ibb.co/jkyhkNB/Light-mail.png"
          width={"150px"}
          height="50px"
          objectFit={"cover"}
        ></Image>
      </Stack>
      <Flex gap={"10px"}>
        <Button
          variant="outline"
          borderRadius={"10px"}
          _hover={{
            backgroundColor: "#FFE01B",
            transition: ".5s",
          }}
        >
          Log in
        </Button>
        <Button
          variant="outline"
          borderRadius={"10px"}
          _hover={{
            backgroundColor: "#FFE01B",
            transition: ".5s",
          }}
        >
          Sign up
        </Button>
      </Flex>
      </Box>
      <Box position={"sticky"} zIndex="1000" top={"0"} left="0" width={"50%"} >
      {isHovering && (<ProductSidebar isHovering={isHovering}/>)}
      </Box>
    </Box>
  );
}
