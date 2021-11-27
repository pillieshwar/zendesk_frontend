import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function Header() {
  const [apidata1, setapidata1] = React.useState([]);

  const params = JSON.stringify({
    username: "eshwarnag.pilli@wsu.edu",
    password: "Eswar123$",
    subdomain: "zcceshwar",
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.post(
          "http://127.0.0.1:8080/tickets/pp",
          params,
          {
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        setapidata1(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  console.log(apidata1);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function connectApi(username) {
    console.log("connectApi", username);
  }

  return (
    <div>
      <Grid h="50px" templateColumns="repeat(10, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Heading mt="4%" float="left" size="sm">
            ZENDESK CODING CHALLENGE
          </Heading>
        </GridItem>
        <GridItem colSpan={2} bg="white" />
        <GridItem colSpan={2} bg="white" />
        <GridItem colSpan={2} bg="white" />
        <GridItem colSpan={2} bg="white">
          <Button
            ml={7}
            mt={2}
            size="md"
            backgroundColor="papayawhip"
            onClick={onOpen}
          >
            Login
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Connect to Zendesk Account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl id="username">
                  {/* <FormLabel>First name</FormLabel> */}
                  <Input id="usr" ref={initialRef} placeholder="Username" />
                </FormControl>

                <FormControl id="password" mt={4}>
                  {/* <FormLabel>Last name</FormLabel> */}
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement>
                    <Button size="md" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </FormControl>

                <FormControl id="subdomain" mt={4}>
                  {/* <FormLabel>Last name</FormLabel> */}
                  <Input placeholder="Sub Domain" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  onClick={() => connectApi("e")}
                  colorScheme="blue"
                  mr={3}
                >
                  Connect
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </GridItem>
      </Grid>
    </div>
  );
}
