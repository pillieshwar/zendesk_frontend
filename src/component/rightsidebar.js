import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Divider, Badge } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";

export default function RightSideBar(props) {
  //   console.log(props);
  return (
    <div>
      <Grid
        h="500px"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(14, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={1} colSpan={14} bg="white">
          <Heading ml="3" mt="2" float="left" as="h3" size="md">
            {props.ticketSubject}
            <Badge ml="4" variant="outline" colorScheme="green">
              {props.ticketStatus}
            </Badge>
            <Badge ml="4" variant="outline" colorScheme="red">
              {props.ticketPriority}
            </Badge>
          </Heading>

          <Divider mt="10" orientation="horizontal" />
        </GridItem>

        <GridItem rowSpan={9} colSpan={2}>
          <Wrap ml="4">
            <WrapItem>
              <Avatar
                name={props.ticketSubject}
                src="https://bit.ly/tioluwani-kolawole"
              />
            </WrapItem>
          </Wrap>
        </GridItem>

        <GridItem rowSpan={1} colSpan={11} bg="papayawhip">
          <Heading ml="4" mt="3" float="left" size="xs">
            Requester Id: {props.ticketRequestorId}
          </Heading>
          <Heading ml="4" mt="3" float="right" size="xs">
            {props.ticketUpdatedAt}
          </Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={11}></GridItem>
        <GridItem rowSpan={7} colSpan={11}>
          <Text fontSize="sm" align="left">
            {props.ticketDescription}
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
}
