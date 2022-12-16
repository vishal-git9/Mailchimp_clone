import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";
import AlertLogin from "../Components/Alert";
export default function Login() {
  // .for using the global auth context
  const { AuthStatus, setAuthStatus } = useContext(AuthContext);
  // getting the form data from users
  const [formData, setFormData] = useState({});
  const [submitData, setSubmitData] = useState({});
  const [submit, setSubmit] = useState(false);
  const getData = (e) => {
    let val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: val });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setSubmitData(formData);
    setSubmit(true);
    setFormData({});
  };
  const { username, password } = formData;
  // posting the data to verify whether the user is present or not

  useEffect(() => {
    if (submit) {
      fetch(`https://dummyjson.com/auth/login`, {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const { token } = data;
          console.log(token);
          if (token) {
            setAuthStatus({
              isAuth: true,
              data: data,
            });
          }
        });
    }
  }, [submit]);
  const { isAuth,data } = AuthStatus;
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {isAuth?<AlertLogin title={data.firstName}/>:""}
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={submitForm}>
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={username || ""}
                  onChange={(e) => getData(e)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password || ""}
                  onChange={(e) => getData(e)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox
                    name="remember"
                    type="checkbox"
                    onChange={(e) => getData(e)}
                  >
                    Remember me
                  </Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
