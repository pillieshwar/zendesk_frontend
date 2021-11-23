import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import LeftSideBar from "./leftsidebar";
import Header from "./header";
import RightSideBar from "./rightsidebar";

export default function MainPage() {
  const [ticketId, setTicketId] = React.useState("");
  const [ticketSubject, setTicketSubject] = React.useState("");
  const [ticketDescription, setTicketDescription] = React.useState("");
  const [ticketRequestorId, setTicketRequestorId] = React.useState(0);
  const [ticketUpdatedAt, setTicketUpdatedAt] = React.useState("");
  const [ticketStatus, setTicketStatus] = React.useState("");
  const [ticketPriority, setTicketPriority] = React.useState("");

  function ticketDetails(
    id,
    subject,
    description,
    requestor_id,
    updated_at,
    status,
    priority
  ) {
    console.log(requestor_id);
    setTicketId(id);
    setTicketSubject(subject);
    setTicketDescription(description);
    setTicketRequestorId(requestor_id);
    setTicketUpdatedAt(updated_at);
    setTicketStatus(status);
    setTicketPriority(priority);
  }
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
      </Grid>
      {/* <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap={4}
      >
        <GridItem colSpan={10} rowSpam={1} bg="white">
          <Header />
        </GridItem>
        <GridItem
          h="1%"
          //   mt="-240"
          overflow="scroll"
          rowSpan={1}
          colSpan={5}
          bg="white"
          flex="overflow"
        >
          <LeftSideBar getTicketDetails={ticketDetails} />
        </GridItem>
        <GridItem mt="-60" rowSpan={1} colSpan={5} bg="white">
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
      </Grid> */}
    </div>
  );
}
