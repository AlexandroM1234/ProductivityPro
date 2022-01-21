import React from "react";
import { Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { Heading, Flex } from "@chakra-ui/react";
import ColorModeToggle from "./Components/ColorModeToggle";
const App = () => {
  return (
    <Flex justify={"space-evenly"} marginTop={"2"} alignItems={"center"}>
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
      <ColorModeToggle />
    </Flex>
  );
};

export default App;
