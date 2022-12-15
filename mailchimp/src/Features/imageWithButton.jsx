import { Stack,Box,Flex,Heading,Text,Button,Image } from "@chakra-ui/react";

export default function ImageButton({image,heading,text,buttonText}) {
    return (
      <Stack
        direction={["column", "row"]}
        spacing="24px"
        mt={"2rem"}
        justifyContent={"space-around"}
      >
        <Box>
          <Image src={image}></Image>
        </Box>
        <Flex
          flexDirection="column"
          justifyContent={"center"}
          width="40%"
          gap={"20px"}
        >
          <Heading>{heading}</Heading>
          <Text>
            {text}
          </Text>
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