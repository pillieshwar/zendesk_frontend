import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

export default function Header() {
  const [apidata, setapidata] = React.useState([]);

  return (
    <div>
      <Grid h="50px" templateColumns="repeat(10, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Heading mt="4%" float="left" size="sm">
            ZENDESK CODING CHALLENGE
          </Heading>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
      </Grid>
    </div>
  );
}
