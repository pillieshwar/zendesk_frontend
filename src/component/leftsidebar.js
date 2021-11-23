import React, { useEffect } from "react";
import axios from "axios";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Badge, Button } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import RightSideBar from "./rightsidebar";

function Feature({ title, desc, date, ...rest }) {
  return (
    <Box p={1} borderWidth="0.5px" {...rest}>
      <Badge float="left" colorScheme="red">
        Ticket Id #{title}
      </Badge>
      <Heading float="right" fontSize="xs">
        {date}
      </Heading>

      <Text float="left" mt={1}>
        {desc}
      </Text>
    </Box>
  );
}

export default function LeftSideBar(props) {
  const [apidata, setapidata] = React.useState([]);

  function displayTicket(
    id,
    subject,
    description,
    requestor_id,
    updated_at,
    status,
    priority
  ) {
    // console.log("left", requestor_id);
    props.getTicketDetails(
      id,
      subject,
      description,
      requestor_id,
      updated_at,
      status,
      priority
    );
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8080/dataauthmultiple");
        // console.log("console", res.data);
        setapidata(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Ticket Id</Th>
            <Th>Subject</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {apidata.map((ticket, index) => (
            <Tr key="index">
              <Td>
                <Badge variant="outline" colorScheme="magenta">
                  #{ticket.id}
                </Badge>
              </Td>
              <Td>{ticket.subject}</Td>
              <Td>
                <Tag size="sm" colorScheme="green" borderRadius="full">
                  <TagLabel>{ticket.status}</TagLabel>
                </Tag>
              </Td>
              <Td>{ticket.updated_at.substring(0, 16)}</Td>
              <Td>
                <IconButton
                  variant="outline"
                  colorScheme="red"
                  aria-label="view ticket"
                  icon={<ViewIcon />}
                  onClick={() =>
                    displayTicket(
                      ticket.id,
                      ticket.subject,
                      ticket.description,
                      ticket.requester_id,
                      ticket.updated_at,
                      ticket.status,
                      ticket.priority
                    )
                  }
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}
