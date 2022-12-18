import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Select,
  Divider,
  Image,
  Center
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import ContentWithButton from "./contentWithButton";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom"
import Slide from "react-reveal/Slide"

const Content = {
  content1: {
    heading: "Also included: Free tools for getting your business online",
    text: "All Marketing plans come with Free website and commerce features, so you can build your dream online presence. But if you want more advanced tools for selling and scheduling, try combining your Marketing plan with a paid Websites & Commerce plan.",
    buttonText: "See Websites & Commerce plans",
  },
  content2: {
    heading: "Prefer to pay as you go?",
    text: "Instead of paying a monthly recurring charge, you can buy email credits as needed through our Pay As You Go plan. It's best for infrequent senders.",
    buttonText: "Learn more",
  },
  content3: {
    heading: "Two-factor authentication discount",
    text: "At Mailchimp, we’re serious about security. We offer a 10% discount for 1 month when you add two-factor authentication to your Mailchimp account with an app like Google Authenticator or SMS two-factor authentication.",
    buttonText: "Get started",
  },
  content4: {
    heading: "Rates for nonprofits and charities",
    text: "Mailchimp offers a 15% discount to nonprofits and charities. To request the discount, sign up for a free account, and contact our Billing team with your username and a link to your organization’s website.",
    buttonText: "Get started",
  },
};

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Pricing() {
  // use navigate
  const navigate = useNavigate()
  const [Premium, setPremium] = useState(149);
  const [Standard, setStandard] = useState(83);
  const [Essential, setEssential] = useState(50);
  const [Numb, setNumb] = useState(500);
  const [Free, setFree] = useState(0);
  const changePrice = (e) => {
    let num = Number(e.target.value);
    if (num >= 10000) {
      setPremium(Math.floor(num /6));
    } else {
      setStandard(Math.floor(num /6));
      setEssential(Math.floor(num /10));
      setPremium(149);
    }
    setNumb(num);
  };

  // for navigating it to the signup page
  const signupPage = (e)=>{
    let val = e.target.id
    if(val=="1"){
      localStorage.setItem("pricing",JSON.stringify(Premium))
    }else if(val=="2"){
      localStorage.setItem("pricing",JSON.stringify(Standard))
    }else if(val=="3"){
      localStorage.setItem("pricing",JSON.stringify(Essential))
    }else{
      localStorage.setItem("pricing",JSON.stringify(Free))
    }

    navigate("/signup")
  }
  return (
    <Box py={12} textAlign="center" overflowX={"hidden"}>
      <HStack spacing={2} textAlign="center" justifyContent="center" flexDirection={{base:"column",md:"column",sm:"column",lg:"row"}}>
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Select width={{base:"90%",md:"90%",sm:"90%",lg:"20%"}} onChange={(e) => changePrice(e)}>
          <option value="500">500</option>
          <option value="1500">1500</option>
          <option value="2500">2500</option>
          <option value="5000">5000</option>
          <option value="10000">10000</option>
        </Select>
      </HStack>
      <Zoom left>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        mt="40px"
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Premium
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                {Premium}
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Phone & Priority Support
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Custom-Coded and Pre-built Email Templates
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Multivariate and A/B Testing
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Enhanced Automated Customer Journeys
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Predictive Segmentation
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Assisted Onboarding
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button id="1" w="full" colorScheme="red" variant="outline" onClick={signupPage}>
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              width={"100%"}
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("red.300", "red.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="12px"
                fontWeight="600"
                rounded="xl"
              >
                LightMail Recommends
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Standard
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  {Standard}
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Phone & Priority Support
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Custom-Coded and Pre-built Email Templates
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Multivariate and A/B Testing
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Enhanced Automated Customer Journeys
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Predictive Segmentation
                </ListItem>
                <ListItem>
                  <ListIcon as={FaTimesCircle} color="red.500" />
                  Assisted Onboarding
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button id="2" w="full" colorScheme="red" disabled={Numb === 10000} onClick={signupPage}>
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Essential
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                {Essential}
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Phone & Priority Support
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Custom-Coded and Pre-built Email Templates
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Multivariate and A/B Testing
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Enhanced Automated Customer Journeys
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                Predictive Segmentation
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                Assisted Onboarding
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
              id="3"
                w="full"
                colorScheme="red"
                variant="outline"
                disabled={Numb === 10000}
                onClick={signupPage}
              >
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Free
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                0
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Email support for the first 30 days
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Custom-Coded and Pre-built Email Templates
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                Multivariate and A/B Testing
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                Enhanced Automated Customer Journeys
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                Predictive Segmentation
              </ListItem>
              <ListItem>
                <ListIcon as={FaTimesCircle} color="red.500" />
                Assisted Onboarding
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                w="full"
                colorScheme="red"
                variant="outline"
                disabled={Numb > 500} onClick={signupPage}
              >
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
      </Zoom>
      <Button textAlign={"center"} colorScheme="red">
        See all plan details
      </Button>
      <HStack
        width={"80%"}
        h={{base:"fit-content",md:"fit-content",sm:"fit-content",lg:"400px"}}
        margin="auto"
        justifyContent={"space-between"}
        flexDirection={{base:"column",md:"column",sm:"column",lg:"row"}}
        textAlign={"left"}
        alignItems="flex-start"
        mt="60px"
        gap={{base:"100px",md:"100px",sm:"100px",lg:"30px"}}      >
        <ContentWithButton
          heading={Content.content1.heading}
          text={Content.content1.text}
          buttonText={Content.content1.buttonText}
        />
        <Divider orientation="vertical" variant={"solid"} />
        <ContentWithButton
          heading={Content.content2.heading}
          text={Content.content2.text}
          buttonText={Content.content2.buttonText}
        />
      </HStack>
      <HStack
        width={"80%"}
        margin="auto"
        justifyContent={"space-between"}
        textAlign={"left"}
        alignItems="flex-start"
        h={{base:"fit-content",md:"fit-content",sm:"fit-content",lg:"400px"}}
        flexDirection={{base:"column",md:"column",sm:"column",lg:"row"}}
        gap={{base:"100px",md:"100px",sm:"100px",lg:"30px"}}
      >
        <ContentWithButton
          heading={Content.content3.heading}
          text={Content.content3.text}
          buttonText={Content.content3.buttonText}
        />
        <Divider orientation="vertical" variant={"solid"} />
        <ContentWithButton
          heading={Content.content4.heading}
          text={Content.content4.text}
          buttonText={Content.content4.buttonText}
        />
      </HStack>
      <Accordi />
      <Images/>
    </Box>
  );
}

function Accordi() {
  return (
    <Box margin={"auto"} width={{base:"100%",md:"90%",sm:"100%",lg:"80%"}} marginTop={{base:"10rem",md:"5rem",sm:"10rem",lg:"4rem"}}>
      <Heading>FAQ's</Heading>
    <Accordion allowToggle m={"5px"} mt={"50px"}>
      <AccordionItem padding={"5px"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontSize={"25px"}>
              What payment methods do you offer?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="left" fontSize={"18px"}>
          We accept all major credit cards, PayPal, and (in select countries)
          direct debit. We also support transactions in a range of currencies.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem  padding={"5px"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontSize={"25px"}>
              How do I switch to a different plan?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="left" fontSize={"18px"}>
          You can switch to a new plan at any time by going to the Billing page
          in your account. Select the plan you’d like to switch to and
          immediately start using new features.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem  padding={"5px"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontSize={"25px"}>
              Can I buy credits instead?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="left" fontSize={"18px"}>
          Yes. If you send emails infrequently and prefer to pay as you go, you
          can buy email credits as an alternative to a monthly plan.{" "}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem  padding={"5px"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontSize={"25px"}>
              Do you have pricing for high-volume email senders?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="left" fontSize={"18px"}>
          We do indeed. If you have more than 200,000 contacts, we have a
          high-volume plan that can meet your needs.{" "}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem  padding={"5px"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontSize={"25px"}>
              What happens if I hit my contact or sending limit?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="left" fontSize={"18px"}>
          Mailchimp will automatically bill you for your overages. As long as
          you pay for your overages on time, we will not stop your campaigns or
          pause your account.{" "}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </Box>
  );
}


function Images(){
  return(
    <Stack mt={"6rem"}>
      <Heading>You’ll be in good company</Heading>
      <HStack justifyContent="center" gap="80px" paddingTop={"4rem"} flexDirection={{base:"column",md:"column",sm:"column",lg:"row"}}>
      <Slide left>
      <Center><Image src='https://eep.io/images/yzco4xsimv0y/6EIjMFs2ZyQWsmOOYc4cGe/19d62aa558c8f5d4c4bf222e7e36571b/EastFork.png?w=260&fm=webp&q=70' alt='Company' width={"100px"}/></Center></Slide>
      <Slide left><Center><Image src='https://eep.io/images/yzco4xsimv0y/5Z9C7t0HDyyaWu60iWE00A/2e3d2eaa056d0d86c6712c88d239762f/chronicle-books-logo.jpg?w=260&fm=webp&q=70' alt='Company' width={"100px"}/></Center></Slide>
      <Slide right><Center><Image src='https://eep.io/images/yzco4xsimv0y/vHWiUSlrS8sSQc0cCesGY/429d539471239d6ffcdb8be8767140cb/Fader-Logo-800px-144dpi.jpg?w=260&fm=webp&q=70' alt='Company' width={"100px"}/></Center></Slide>
      <Slide right><Center><Image src='https://eep.io/images/yzco4xsimv0y/2fZXnWbDK8ugIaCW8Qus0i/1b8f1c4aa80dda874418e4bfa29b60e5/Sweat.png?w=260&fm=webp&q=70' alt='Company' width={"100px"}/></Center></Slide>
      </HStack>
    </Stack>
  )
}