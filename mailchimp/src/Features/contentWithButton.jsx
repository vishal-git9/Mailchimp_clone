import { Button, VStack,Heading,Text,Box, Flex } from "@chakra-ui/react";

export default function ContentWithButton({heading,text,buttonText}){
    return(
        <VStack height="300px" justifyContent={"space-between"} alignItems="flex-start" width={"45%"}>
            <Flex flexDirection={"column"} gap="40px">
            <Heading fontWeight={"500"}>{heading}</Heading>
            <Text>{text}</Text>
            </Flex>
            <Button variant={"outline"} borderRadius="15px" _hover={{
                backgroundColor:"#FFE01B",
                transition:"0.5s"
            }}>{buttonText}</Button>
        </VStack>
    )
}