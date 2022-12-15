import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  Image,
  Divider,
} from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
import ImageButton from "./imageWithButton";
import ContentWithButton from "./contentWithButton";
const Content = {
  content1: {
    img: "https://eep.io/images/yzco4xsimv0y/3PN7I87VPcAzVXe6iMYLct/5a1300742c23f2e01ad572273285c143/pricing.png?w=760&fm=webp&q=80",
    heading: "Also included: Free, built-in marketing tools",
    text: "All Websites & Commerce plans come with Free marketing features like email and social posting, so you can find new customers and drive sales. But if you want more advanced marketing tools, like our Customer Journey Builder, try a paid Marketing plan.",
    buttontext: "Explore marketing plans",
  },
  content2: {
    img: "https://eep.io/images/yzco4xsimv0y/6rMAO0ldN6imaGyWo68a04/835f8130a3279eb3c68a334f452ddd2f/ILLO_Spot_Mailchimp_Agencies_1080.png?w=540&fm=webp&q=80",
    heading: "Need to help clients use Mailchimp?",
    text: "Unlock the tools you need to get work done for clients when you sign up through Mailchimp & Co, our community for freelancers and agencies. It’s free to join with any Mailchimp plan.",
    buttontext: "Get started",
  },
};
const ContentButton = {
  content1: {
    heading: "Two-factor authentication discount",
    text: "At Mailchimp, we’re serious about security. We offer a 10% discount for 1 month when you add two-factor authentication to your Mailchimp account with an app like Google Authenticator or SMS two-factor authentication.",
    buttontext: "Get started",
  },
  content2: {
    heading: "Rates for nonprofits and charities",
    text: "Mailchimp offers a 15% discount to nonprofits and charities. To request the discount, sign up for a free account, and contact our Billing team with your username and a link to your organization’s website.",
    buttontext: "Get started",
  },
};

export default function Commerce() {
  return (
    <Stack
      width={"90%"}
      margin="auto"
      mt={"50px"}
      alignItems={"center"}
      gap="80px"
    >
      <HStack width={"80%"} margin="auto" justifyContent={"center"}>
        <VStack
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
          textAlign="left"
          justifyContent={"space-around"}
          alignItems="flex-start"
          padding={"20px"}
          width="30%"
          gap={"10px"}
          height="420px"
        >
          <Heading>Plus</Heading>
          <Text>
            All websites & commerce features and our lowest transaction fees for
            scaling businesses.
          </Text>
          <Box>
            <Text>Starts at</Text>
            <HStack>
              <Text fontSize="1xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                25
              </Text>
            </HStack>
            <Text>/month</Text>
            <Text>+ .5% transaction fee and</Text>
            <Text>Stripe processing fees*</Text>
          </Box>
          <Button
            width="full"
            borderRadius={"15px"}
            border="1px solid black"
            backgroundColor="#FFE01B"
            _hover={{
              backgroundColor: "#FFE01B",
            }}
          >
            Buy now
          </Button>
        </VStack>
        <VStack
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
          textAlign="left"
          justifyContent={"space-around"}
          alignItems="flex-start"
          padding={"20px"}
          width="30%"
          gap={"10px"}
          height="420px"
        >
          <Heading>Core</Heading>
          <Text>
            Website customization, 24/7 support, and lower transaction fees for
            growing businesses.{" "}
          </Text>
          <Box>
            <Text>Starts at</Text>
            <HStack>
              <Text fontSize="1xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                10
              </Text>
            </HStack>
            <Text>/month</Text>
            <Text>+ .5% transaction fee and</Text>
            <Text>Stripe processing fees*</Text>
          </Box>
          <Button
            width="full"
            borderRadius={"15px"}
            border="1px solid black"
            backgroundColor="#FFE01B"
            _hover={{
              backgroundColor: "#FFE01B",
            }}
          >
            Buy now
          </Button>
        </VStack>
        <VStack
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
          textAlign="left"
          justifyContent={"space-around"}
          alignItems="flex-start"
          padding={"20px"}
          width="30%"
          gap={"10px"}
          height="420px"
        >
          <Heading>Free</Heading>
          <Text>
            Everything businesses need to build a website and launch a store.{" "}
          </Text>
          <Box>
            <Text>Free</Text>
            <HStack>
              <Text fontSize="1xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                0
              </Text>
            </HStack>
            <Text>/month</Text>
            <Text>+ .5% transaction fee and</Text>
            <Text>Stripe processing fees*</Text>
          </Box>
          <Button
            width="full"
            borderRadius={"15px"}
            border="1px solid black"
            backgroundColor="#FFE01B"
            _hover={{
              backgroundColor: "#FFE01B",
            }}
          >
            Buy now
          </Button>
        </VStack>
      </HStack>
      {/* button */}

      <Button
        width={"fit-content"}
        textAlign="center"
        borderRadius={"15px"}
        border="1px solid black"
        backgroundColor="#FFE01B"
        _hover={{
          backgroundColor: "#FFE01B",
        }}
      >
        Compare all plans
      </Button>
      <Text textAlign={"center"} width="80%">
        *All Websites & Commerce plans include access to our Mailchimp stores
        product. If you create and publish a store, transaction fees will be
        charged to you on a per transaction basis based on the total order value
        (minus promotions and discounts, plus tax and shipping) for each
        transaction. These transaction fees are non-refundable. You will also be
        charged fees by Stripe. See Stripe.com for details about Stripe fees.
      </Text>
      <VStack
        backgroundColor={"#F6F6F4"}
        width="100%"
        gap={"10px"}
        padding="50px"
      >
        <Heading>Featured Product:</Heading>
        <Text width={"50%"} textAlign="center">
          Create unlimited one-on-one and group services with our new Advanced
          Scheduling add-on for $8/month.
        </Text>
        <Button
          borderRadius={"15px"}
          border="1px solid black"
          backgroundColor="#FFE01B"
          _hover={{
            backgroundColor: "#FFE01B",
          }}
        >
          Buy now
        </Button>
      </VStack>
      <Box>
        <ImageButton
          heading={Content.content1.heading}
          image={Content.content1.img}
          text={Content.content1.text}
          buttonText={Content.content1.buttontext}
        />
      </Box>
      <PowerfulFeatures />
      <HStack width={"80%"}
        margin="auto"
        justifyContent={"space-between"}
        textAlign={"left"}
        alignItems="flex-start"
        height={"300px"}
        mt="90px">
      <ContentWithButton heading={ContentButton.content1.heading} text={ContentButton.content1.text} buttonText={ContentButton.content1.buttontext}/>
      <Divider orientation="vertical" variant={"solid"}/>
      <ContentWithButton heading={ContentButton.content2.heading} text={ContentButton.content2.text} buttonText={ContentButton.content2.buttontext}/>
      </HStack>
      <ImageButton
          heading={Content.content2.heading}
          image={Content.content2.img}
          text={Content.content2.text}
          buttonText={Content.content2.buttontext}
        />
        <Accordi/>
    </Stack>
  );
}

function PowerfulFeatures() {
  return (
    <Stack
      bg={"#C5DBF2"}
      width="100%"
      alignItems={"center"}
      gap="40px"
      padding={"80px"}
    >
      <Heading>Add on powerful features</Heading>
      <Stack
        bgColor={"white"}
        width="90%"
        padding={"80px 80px 0px 80px"}
        gap="40px"
      >
        <HStack gap={"40px"}>
          <VStack alignItems={"flex-start"} width="60%" gap="10px">
            <Heading>Add on a domain</Heading>
            <Text>
              Buy a custom domain to help people find you on the web. Plus, a
              consistently branded online presence builds trust across email and
              other channels. Choose from over 200 domain extensions, including
              .com, .org, and .net.
            </Text>
            <Input placeholder="Start your search here" size="lg" />
            <Button
              borderRadius={"15px"}
              border="1px solid black"
              backgroundColor="#FFE01B"
              _hover={{
                backgroundColor: "#FFE01B",
              }}
            >
              Find your domain
            </Button>
          </VStack>
          <Box>
            <Image
              src="https://eep.io/images/yzco4xsimv0y/4yOflc1XUIZF81NnLz05jC/685616b38b9b5e24d9b15f1461409f80/AUI_Custom-Domains_Eyewear_v2_1520.png"
              width={"400px"}
            />
          </Box>
        </HStack>
        <HStack p="20px" bgColor="#F6F6F4" width="100%" gap={"20px"}>
          <Image
            src="https://eep.io/images/yzco4xsimv0y/azFGj9nAkrFqZwtlOxrOO/c7633a0a233acbff0941c35632f69ebc/google-workspace.png"
            width={"250px"}
          />
          <Text>
            Add Google Workspace to your domain purchase to get a custom email
            address and team collaboration tools like Google Drive, Sheets, and
            Slides
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
}

function Accordi() {
    return (
      <Box mt={"4rem"} width="80%" margin={"auto"}>
        <Heading textAlign={"center"}>FAQ's</Heading>
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