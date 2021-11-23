import React, { useEffect } from "react";
import { Grid, GridItem, Button, Stack } from "@chakra-ui/react";
import LeftSideBar from "./leftsidebar";
import Header from "./header";
import RightSideBar from "./rightsidebar";
import axios from "axios";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  WarningIcon,
} from "@chakra-ui/icons";

export default function MainPage() {
  const [ticketId, setTicketId] = React.useState("");
  const [ticketSubject, setTicketSubject] = React.useState("");
  const [ticketDescription, setTicketDescription] = React.useState("");
  const [ticketRequestorId, setTicketRequestorId] = React.useState(0);
  const [ticketUpdatedAt, setTicketUpdatedAt] = React.useState("");
  const [ticketStatus, setTicketStatus] = React.useState("");
  const [ticketPriority, setTicketPriority] = React.useState("");
  const [ticketCount, setTicketCount] = React.useState("");

  useEffect(() => {
    async function fetchTicketCount() {
      try {
        const res = await axios.get("http://localhost:8080/ticketCount");
        setTicketCount(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTicketCount();
  }, []);

  function ticketDetails(
    id,
    subject,
    description,
    requestor_id,
    updated_at,
    status,
    priority
  ) {
    setTicketId(id);
    setTicketSubject(subject);
    setTicketDescription(description);
    setTicketRequestorId(requestor_id);
    setTicketUpdatedAt(updated_at);
    setTicketStatus(status);
    setTicketPriority(priority);
  }

  const pagination = Math.ceil(ticketCount.value / 25);
  const arr = [];
  for (var i = 0; i < pagination; i++) {
    arr[i] = i;
  }
  console.log("pagination", arr);
  return (
    <div>
      <Grid
        h="670px"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap={2}
        p={2}
      >
        <GridItem rowSpan={1} colSpan={10} bg="white">
          <Header />
        </GridItem>
        <GridItem overflow="scroll" rowSpan={8} colSpan={5} bg="white">
          <LeftSideBar getTicketDetails={ticketDetails} />
        </GridItem>
        <GridItem overflow="scroll" rowSpan={8} colSpan={5} bg="white">
          <RightSideBar
            ticketId={ticketId}
            ticketSubject={ticketSubject}
            ticketDescription={ticketDescription}
            ticketRequestorId={ticketRequestorId}
            ticketUpdatedAt={ticketUpdatedAt}
            ticketStatus={ticketStatus}
            ticketPriority={ticketPriority}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={5}>
          <Stack direction="row" spacing={2} align="center">
            <Button key="back " colorScheme="teal" size="xs" variant="outline">
              <ChevronLeftIcon />
            </Button>
            {arr.map((item, key) => (
              <Button key={item} colorScheme="teal" size="xs" variant="outline">
                {key + 1}
              </Button>
            ))}
            <Button key="front" colorScheme="teal" size="xs" variant="outline">
              <ChevronRightIcon />
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </div>
  );
}
