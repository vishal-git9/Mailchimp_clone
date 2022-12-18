import {
  Divider,
  Heading,
  HStack,
  Radio,
  Stack,
  VStack,
  Image,
  Input,
  RadioGroup,
  Box,
  Text,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import process from "../../Images/process.gif"
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CheckoutSteps from "./checkoutSteps";
import { useEffect } from "react";
let pricingVal = JSON.parse(localStorage.getItem("pricing"))
export default function Checkout() {
  const [subscriptionPrice,setSubscriptionPrice] = useState(0)
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  useEffect(()=>{
    setSubscriptionPrice(pricingVal)
  },[])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const[click,setClick] = useState(false)
    const ConfirmationPage = ()=>{
      setClick(true)
      setOverlay(<OverlayOne />)
        onOpen()
    }
  return (
    <Stack justifyContent={"center"} alignItems="center" >
      {click?<PaymentProcess overlay = {overlay} isOpen={isOpen} onClose={onClose}/>:null}
    <Stack width={{base:"95%",md:"90%",sm:"90%",lg:"80%"}}  margin="auto" justifyContent={"space-between"} flexDirection={{base:"column",md:"column",sm:"column",lg:"row"}} gap="20px">
      <VStack width={{base:"100%",md:"90%",sm:"90%",lg:"50%"}} alignItems={"flex-start"} gap="80px">
      <CheckoutSteps/>
        <VStack alignItems={"flex-start"}>
          <Heading>Payment method</Heading>
          <Divider variant={"solid"} />
          <CheckoutForm />
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Heading>Contact Address</Heading>
          <Divider variant={"solid"} />
          <CheckoutAddress />
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Heading>Billing address</Heading>
          <Divider variant={"solid"} />
          <BillingAddress />
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Heading>Tax settings</Heading>
          <Divider variant={"solid"} />
          <Tax />
        </VStack>
        <HStack>
          <Button bgColor={"#004E56"} width="100px" color={"white"} _hover={{
        bgColor:"#004E56"
      }}>
            Save
          </Button>
          <Button>Cancel</Button>
        </HStack>
      </VStack>
      <Stack width={{base:"100%",md:"90%",sm:"90%",lg:"40%"}}  bgColor="#E3E9F1" padding={"30px"} pt="100px">
        <BillingSummary ConfirmationPage = {ConfirmationPage} subscriptionPrice={subscriptionPrice}/>
      </Stack>
    </Stack>
    </Stack>
  );
}


function CheckoutForm() {
  const [input, setInput] = useState("");
  const isError = input === "";
  console.log(input.length);
  return (
    <Stack>
      <HStack gap={"40px"} mt="20px">
        <RadioGroup defaultValue="1">
          <Radio value="card">
            <Image src="https://us21.admin.mailchimp.com/release/e/assets/american-express-F3NWOJZT.svg"></Image>
          </Radio>
          <Radio value="paypal">
            <Image src="https://us21.admin.mailchimp.com/release/e/assets/paypal-MDZ4JKZB.svg"></Image>
          </Radio>
        </RadioGroup>
      </HStack>
      <FormControl isInvalid={isError}>
        <FormLabel>Card Number</FormLabel>
        <Input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          readOnly={input.length === 16}
        />
        {!isError ? (
          <FormHelperText>
            Make sure you enter the right card number.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Card Number is required.</FormErrorMessage>
        )}
      </FormControl>
      <HStack>
        <Box>
          <FormLabel>Expiration date</FormLabel>
          <Input placeholder="MM/YY" />
        </Box>
        <Box>
          <FormLabel>Security code</FormLabel>
          <Input placeholder="123" />
        </Box>
      </HStack>
    </Stack>
  );
}

function CheckoutAddress() {
  return (
    <Stack textAlign={"left"}>
      <Text>Vishal Singh</Text>
      <Text>Okhla Head Rd</Text>
      <Text>New Delhi , DL India</Text>
      <Text>110025</Text>
    </Stack>
  );
}

function BillingAddress() {
  return (
    <Stack>
      <Checkbox size={"lg"}>Same as contact address</Checkbox>
    </Stack>
  );
}

function Tax() {
  return (
    <Stack>
      <HStack>
        <Text mb="8px" fontSize={"20px"}>
          Registered VAT/GST/Tax ID
        </Text>
        <Text mb="8px" fontSize={"16px"} color="gray.500">
          optional
        </Text>
      </HStack>
      <InputGroup>
        <Input placeholder="Enter Number" size={"lg"} />
        <InputRightElement children={<QuestionIcon color="gray.500" />} />
      </InputGroup>
    </Stack>
  );
}

function BillingSummary({ConfirmationPage,subscriptionPrice}) {
  let total = subscriptionPrice+1.66
  return (
    <Stack gap={"30px"}>
      <Heading>Purchase summary</Heading>
      <HStack alignItems="flex-start" justifyContent={"space-between"}>
        <VStack alignItems="flex-start" >
            <Text fontWeight={"bold"}>Essentials plan</Text>
            <Text>500 contacts*</Text>
            <Text>5,000 email sends*</Text>
        </VStack>
        <Text fontWeight={"bold"}>{subscriptionPrice} / month</Text>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>Tax</Text>
        <Text fontWeight={"bold"}>$1.66</Text>
      </HStack>
      <Box width={"100%"} borderTop="1px solid black"></Box>
      <HStack justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>Total</Text>
        <Text fontWeight={"bold"}>${total}</Text>
      </HStack>
      <Button width={"100%"} bgColor={"#004E56"} color={"white"} _hover={{
        bgColor:"#004E56"
      }} onClick={ConfirmationPage}>Pay now</Button>
      <Stack gap={"20px"}>
        <Text>
          By selecting “Pay now”, I understand that I am enrolling in a
          subscription plan and I authorize Mailchimp to charge my payment
          method each month at the then-current list price (plus applicable
          taxes) unless I cancel. I can cancel anytime by going to my Billing
          page in the Account Settings.
        </Text>
        <Text>
        *When you exceed your limit, you incur additional charges of $4.68/mo per additional 250 contacts (comes with additional 2,500 email sends).
        </Text>
        <Text>
          By selecting “Pay now”, I understand that I am enrolling in a
          subscription plan and I authorize Mailchimp to charge my payment
          method each month at the then-current list price (plus applicable
          taxes) unless I cancel. I can cancel anytime by going to my Billing
          page in the Account Settings.
        </Text>
      </Stack>
    </Stack>
  );
}


function PaymentProcess({overlay,isOpen,onClose}) {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/checkout/confirmation")
    },7000)
  },[])
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent textAlign="center">
          <ModalHeader>Your Payment is processing...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Please Wait for a while!</Text>
            <Image src={process}></Image>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}