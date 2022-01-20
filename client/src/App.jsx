import React from "react";
import { Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { Heading, Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex justify={"space-evenly"} marginTop={"2"}>
      <Heading as="h1">Productivity Pro</Heading>
      <Link as={ReachLink} to={"ToDo"}>
        ToDo
      </Link>
      <Link as={ReachLink} to={"Timer"}>
        Timer
      </Link>
      <Link as={ReachLink} to={"Pomodoro"}>
        Pomodoro
      </Link>
    </Flex>
  );
};

export default App;
