import { Button, VStack,Heading,Text,Box, Flex } from "@chakra-ui/react";
import Slide from "react-reveal/Slide"
export default function ContentWithButton({heading,text,buttonText}){
    return(
        <VStack height="300px" justifyContent={"space-between"} alignItems="flex-start" width={{base:"100%",md:"80%",sm:"100%",lg:"45%"}} mt={{base:"7rem",md:"4rem",sm:"7rem",lg:"0rem"}}>
            <Flex flexDirection={"column"} gap="40px">
                <Slide right>
            <Heading fontWeight={"500"}>{heading}</Heading>
            </Slide>
            <Slide right>
            <Text>{text}</Text>
            </Slide>
            </Flex>
            <Slide down>
            <Button variant={"outline"} borderRadius="15px" _hover={{
                backgroundColor:"#FFE01B",
                transition:"0.5s"
            }}>{buttonText}</Button>
            </Slide>
        </VStack>
    )
}