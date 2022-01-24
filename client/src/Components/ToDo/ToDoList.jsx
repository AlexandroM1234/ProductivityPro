import { Flex } from "@chakra-ui/react";
import React from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = ({ toDos }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {toDos.map((toDo) => {
        return <ToDoCard key={toDo.id} toDo={toDo} />;
      })}
    </Flex>
  );
};

export default ToDoList;
