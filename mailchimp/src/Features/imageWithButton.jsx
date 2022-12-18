import { Stack,Box,Flex,Heading,Text,Button,Image } from "@chakra-ui/react";
import Slide from "react-reveal/Slide"
import Zoom from "react-reveal/Zoom"
export default function ImageButton({image,heading,text,buttonText}) {
    return (
      <Stack
        direction={{base:"column",md:"column",sm:"column",lg:"row"}}
        spacing="24px"
        mt={"2rem"}
        justifyContent={"space-around"}
      >
        <Zoom left>
        <Box>
          <Image src={image}></Image>
        </Box>
        </Zoom>
        <Flex
          flexDirection="column"
          justifyContent={"center"}
          width={{base:"100%",md:"80%",sm:"100%",lg:"40%"}}
          gap={"20px"}
        >
          <Slide right>
          <Heading>{heading}</Heading>
          </Slide>
          <Slide right>
          <Text>
            {text}
          </Text>
          </Slide>
          <Button
            width={"fit-content"}
            background="none"
            border={"1px solid black"}
            borderRadius="15px"
            padding={"12px 10px"}
            _hover={{
              backgroundColor: "#FFE01B",
            }}
          >
            {buttonText}
          </Button>
        </Flex>
      </Stack>
    );
  }