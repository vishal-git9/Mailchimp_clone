import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  AspectRatio,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Platform1Hd from "../Images/Platform1Hd.mp4";
import ThreeTierPricing from "./pricingCards";
import Automate_cart from "../Images/Automate_cart.gif";
import AI_animate from "../Images/AI_animate.gif";
import Email2 from "../Images/Email2.gif";
import Footer from "../Components/footer"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function CallToActionWithIllustration() {
  const{AuthStatus} = useContext(AuthContext)
  const navigate = useNavigate()
  const{isAuth,data} = AuthStatus
  return (
    <Container maxW={"9xl"}>
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
            textAlign="center" onClick={()=>navigate("/pricing")}
          >
            Signup
          </Button>
        </Stack>
      </Stack>
      <Fade left>
      <Cards />
      </Fade>
      <Fade left>
      <Video />
      </Fade>
      <Zoom right>
      <ThreeTierPricing />
      </Zoom>
      <LightSpeed left>
      <Journey />
      </LightSpeed>
      <LightSpeed right>
      <JourneySecond />
      </LightSpeed>
      <LightSpeed left>
      <JourneyThree />
      </LightSpeed>
      <Integrations/>
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
      pt={{base:"2rem",md:"5rem",lg:"7rem"}}
      pb={{base:"2rem",md:"5rem",lg:"7rem"}}
    >
      <Box>
        <video src={Platform1Hd} width="1200px" controls></video>
      </Box>
      <Text
        mt={"30px"}
        color="white"
        textAlign={"center"}
        width={{base:"100%",md:"80%",lg:"60%"}}
        fontSize={{base:"14px",md:"20px",lg:"20px"}}
      >
        Most email marketing platforms tell you how your campaigns perform. We
        analyze the data from the billions of emails we send to give you
        personalized recommendations for improving your content, targeting, and
        automations.
      </Text>
    </Box>
  );
}

function Journey() {
  return (
    <Stack
    flexDirection={{base:"column",md:"column",sm:"column",lg:"row"}}
      spacing="24px"
      mt={"2rem"}
      justifyContent={"space-around"}
    >
      <Box>
        <Image src={Automate_cart}></Image>
      </Box>
      <Flex
        flexDirection="column"
        justifyContent={"center"}
        width={{base:"100%",md:"80%",sm:"100%",lg:"40%"}}
        gap={"20px"}
      >
        <Heading>Keep your emails relevant and your brand growing</Heading>
        <Text>
          Get a head start with pre-built journeys that help you cross-sell your
          products, recover abandoned carts, re-engage existing customers, and
          win new ones.
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
          Learn more
        </Button>
      </Flex>
    </Stack>
  );
}
function JourneySecond() {
  return (
    <Stack flexDirection={{base:"column",md:"column",sm:"column",lg:"row"}}
      spacing="24px"
      mt={"2rem"}
      justifyContent={"space-around"}
    >
      <Flex
        flexDirection="column"
        justifyContent={"center"}
        width={{base:"100%",md:"80%",sm:"100%",lg:"40%"}}
        gap={"20px"}
      >
        <Heading>Discover new ways to automate</Heading>
        <Text>
          Use our intelligent predictions to tighten your targeting strategy,
          strengthen customer relationships, and drive repeat sales.
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
          Learn more
        </Button>
      </Flex>
      <Box>
        <Image src={AI_animate}></Image>
      </Box>
    </Stack>
  );
}
function JourneyThree() {
  return (
    <Stack
    flexDirection={{base:"column",md:"column",sm:"column",lg:"row"}}
      spacing="24px"
      mt={"2rem"}
      justifyContent={"space-around"}
    >
      <Flex
        flexDirection="column"
        justifyContent={"center"}
        width={{base:"100%",md:"80%",sm:"100%",lg:"40%"}}
        gap={"20px"}
      >
        <Heading>Keep customers ready to buy with engaging content</Heading>
        <Accordion defaultIndex={[0]} allowMultiple m={"5px"}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Content Optimizer
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Learn how your emails compare to the top-performing campaigns in
              your industry and get data-driven suggestions for improving your
              copy, imagery, and layout.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Creative assistant
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Our Creative Assistant will help you stand out by using AI to
              create custom designs for your brand.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
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
          Learn more
        </Button>
      </Flex>
      <Box>
        <Image src={Email2}></Image>
      </Box>
    </Stack>
  );
}


function Integrations(){
  return(
    <Box width={"90%"} margin="auto">
      <Fade right>
      <Heading width={{base:"100%",md:"80%",lg:"40%"}} fontSize={{base:"20px",md:"24px",lg:"35px"}}>
      Bring in more data, drive more growth with our integrations
      </Heading>
      </Fade>
    <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={10} mt="2rem">
      <Fade left>
        <Flex justifyContent={"space-around"} gap={"20px"} padding={{base:"10px",md:"20px",lg:"30px"}} _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80" alt="canva_logo" height={"100px"}>
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>Canva</Text>
        <Text>Create compelling visuals for your marketing</Text>
        </Box>
      </Flex>
      </Fade>
      <Fade right>
      <Flex justifyContent={"space-around"} gap={"20px"} padding="30px" _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80" alt="canva_logo" >
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>LightMail for salesforce</Text>
        <Text>Sync your Lightmail subscribers and salseforce leads across platforms</Text>
        </Box>
      </Flex>
      </Fade>
      <Fade left><Flex justifyContent={"space-around"} gap={"20px"} padding="30px" _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80" alt="canva_logo" height={"100px"}>
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>Canva</Text>
        <Text>Create compelling visuals for your marketing</Text>
        </Box>
      </Flex>
      </Fade>
      <Fade right><Flex justifyContent={"space-around"} gap={"20px"} padding="30px" _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=80" alt="canva_logo" height={"100px"}>
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>Canva</Text>
        <Text>Create compelling visuals for your marketing</Text>
        </Box>
      </Flex>
      </Fade>
      <Fade left><Flex justifyContent={"space-around"} gap={"20px"} padding="30px" _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/5e610ecd21eeb25d0b82b098ce424e34/Google_Analytics2.jpg?w=196&fm=webp&q=80" alt="canva_logo" height={"100px"}>
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>Canva</Text>
        <Text>Create compelling visuals for your marketing</Text>
        </Box>
      </Flex>
      </Fade>
      <Fade right><Flex justifyContent={"space-around"} gap={"20px"} padding="30px" _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&fm=webp&q=80" alt="canva_logo" height={"100px"}>
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>Canva</Text>
        <Text>Create compelling visuals for your marketing</Text>
        </Box>
      </Flex>
      </Fade>
      <Fade left><Flex justifyContent={"space-around"} gap={"20px"} padding="30px" _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=80" alt="canva_logo" height={"100px"}>
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>Canva</Text>
        <Text>Create compelling visuals for your marketing</Text>
        </Box>
      </Flex>
      </Fade>
      <Fade right>
      <Flex justifyContent={"space-around"} gap={"20px"} padding="30px" _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=80" alt="canva_logo" height={"100px"}>
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>Canva</Text>
        <Text>Create compelling visuals for your marketing</Text>
        </Box>
      </Flex>
      </Fade>
      <Fade left><Flex justifyContent={"space-around"} gap={"20px"} padding="30px" _hover={
        {
          backgroundColor:"#EFEEEA",
          cursor:"pointer",
          transition:"0.5s"
        }
      }>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Image src="https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=80" alt="canva_logo" height={"100px"} >
          </Image>
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"10px"} justifyContent="center">
        <Text fontWeight={"bold"}>Canva</Text>
        <Text>Create compelling visuals for your marketing</Text>
        </Box>
      </Flex>
      </Fade>
    </SimpleGrid>
    </Box>
  )
}