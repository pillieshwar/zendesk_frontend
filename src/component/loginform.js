import React, { useState } from "react";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  InputRightElement,
  Input,
  //   form,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Dashboard from "./dashboard";

export default function LoginForm() {
  const [connectionStatus, setConnectionStatus] = React.useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [subdomain, setSubDomain] = useState("");

  async function handleSubmit() {
    console.log(username, password, subdomain);

    const params = JSON.stringify({
      username: username,
      password: password,
      subdomain: subdomain,
    });

    try {
      const res = await axios
        .post("http://127.0.0.1:8080/tickets/pp", params, {
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(setConnectionStatus(true));
    } catch (err) {
      console.log(err);
    }
  }

  console.log(connectionStatus);
  return (
    <div>
      {/* {() => {
  if (connectionStatus) { */}
      {connectionStatus ? (
        <Dashboard />
      ) : (
        <Grid templateColumns="repeat(12, 1fr)" mt="10%" gap={4}>
          <GridItem colSpan={4} bg="white"></GridItem>
          <GridItem pt={10} pb={5} colSpan={4}>
            <Heading size="md">Connect to Zendesk Account</Heading>
            <form onSubmit={handleSubmit}>
              <FormControl mt={5} id="username">
                <Input
                  bg="white"
                  type="username"
                  ref={initialRef}
                  placeholder="Username"
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </FormControl>

              <FormControl id="password" mt={4}>
                <Input
                  bg="white"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.currentTarget.value)}
                />
                <InputRightElement>
                  <Button size="md" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </FormControl>

              <FormControl id="subdomain" mt={4}>
                <Input
                  bg="white"
                  placeholder="Sub Domain"
                  type="subdomain"
                  onChange={(event) => setSubDomain(event.currentTarget.value)}
                />
              </FormControl>

              <Button mt={5} colorScheme="blue" mr={3} type="submit">
                Connect
              </Button>
            </form>
          </GridItem>
          <GridItem colSpan={4} bg="white"></GridItem>
        </Grid>
      )}
    </div>
  );
}
