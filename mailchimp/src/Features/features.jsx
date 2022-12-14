import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  AspectRatio,
  Box,
} from "@chakra-ui/react";
import Platform1Hd from "../Images/Platform1Hd.mp4";
import ThreeTierPricing from "./pricingCards"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"8xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={300}
          fontFamily="means Web,serif"
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Turn Emails{" "}
          <Text as={"span"} color={"#FFE01B"}>
            into Revenue
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Win new customers with the #1 email marketing and automations brand*
          that recommends ways to get more opens, clicks and sales.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            variant="outline"
            bg={"#FFE01B"}
            _hover={{ bg: "#FFE01B" }}
            textAlign="center"
          >
            Signup
          </Button>
        </Stack>
      </Stack>
      <Cards />
      <Video />
      <ThreeTierPricing/>
    </Container>
  );
}

function Cards() {
  return (
    <SimpleGrid
      spacing={0}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      width={"100%"}
    >
      <Card backgroundColor={"#D99536"} borderRadius="none">
        <CardHeader>
          <Heading size="md" fontWeight={"400"}>
            {" "}
            Convert with Automation
          </Heading>
        </CardHeader>
        <Image
          src="https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80"
          objectFit={"cover"}
        ></Image>
        <CardBody>
          <Text fontWeight={"500"}>
            Send the right message at the right time to convert more customers.
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            background="none"
            border={"1px solid black"}
            borderRadius="15px"
            padding={"12px 10px"}
            _hover={{
              backgroundColor: "#FFE01B",
            }}
          >
            View here
          </Button>
        </CardFooter>
      </Card>
      <Card backgroundColor={"#E7B75F"} borderRadius="none">
        <CardHeader>
          <Heading size="md" fontWeight={"400"}>
            Optimize with AI & Analytics
          </Heading>
        </CardHeader>
        <Image
          src="https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80"
          objectFit={"cover"}
        ></Image>
        <CardBody>
          <Text fontWeight={"500"}>
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            background="none"
            border={"1px solid black"}
            borderRadius="15px"
            padding={"12px 10px"}
            _hover={{
              backgroundColor: "#FFE01B",
            }}
          >
            View here
          </Button>
        </CardFooter>
      </Card>
      <Card backgroundColor={"#FDF8EA"} borderRadius="none">
        <CardHeader>
          <Heading size="md" fontWeight={"400"}>
            Target with Segmentation
          </Heading>
        </CardHeader>
        <Image
          src="https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80"
          objectFit={"cover"}
        ></Image>
        <CardBody>
          <Text fontWeight={"500"}>
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            background="none"
            border={"1px solid black"}
            borderRadius="15px"
            padding={"12px 10px"}
            _hover={{
              backgroundColor: "#FFE01B",
            }}
          >
            View here
          </Button>
        </CardFooter>
      </Card>
      <Card borderRadius="none">
        <CardHeader>
          <Heading size="md" fontWeight={"400"}>
            Sync with Integrations
          </Heading>
        </CardHeader>
        <Image
          src="https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80"
          objectFit={"cover"}
        ></Image>
        <CardBody>
          <Text fontWeight={"500"}>
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            background="none"
            border={"1px solid black"}
            borderRadius="15px"
            padding={"12px 10px"}
            _hover={{
              backgroundColor: "#FFE01B",
            }}
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

// video section

function Video() {
  return (
    <Box
      width={"100%"}
      backgroundColor="black"
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      pt={"7rem"}
      pb="7rem"
    >
      <Box>
        <video src={Platform1Hd} width="1200px" controls></video>
      </Box>
      <Text mt={"30px"} color="white" textAlign={"center"} width="60%" fontSize={"20px"}>
        Most email marketing platforms tell you how your campaigns perform. We
        analyze the data from the billions of emails we send to give you
        personalized recommendations for improving your content, targeting, and
        automations.
      </Text>
    </Box>
  );
}