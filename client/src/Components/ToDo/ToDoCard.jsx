import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";

const ToDoCard = ({ toDo, completed, deleteToDo }) => {
  return (
    <Flex
      className="toDoCard"
      w={"xl"}
      margin={"2"}
      justifyContent={"space-between"}
      alignItems={"center"}
      border={"1px"}
      borderColor={"inherit"}
      borderRadius={"var(--chakra-radii-md)"}
    >
      <Box width={"md"} height={"max-content"}>
        <Text
          className="toDoText"
          textAlign={"center"}
          textDecorationLine={toDo.completed === true ? "line-through" : ""}
        >
          {toDo.task}
        </Text>
      </Box>
      <Box>
        <IconButton
          className="completeButton"
          margin={"1"}
          aria-label="Mark To Do Completed"
          icon={<CheckIcon />}
          onClick={() => {
            completed(toDo.id);
          }}
        />
        <IconButton
          className="deleteButton"
          margin={"1"}
          aria-label="Delete To Do"
          icon={<DeleteIcon />}
          onClick={() => {
            deleteToDo(toDo.id);
          }}
        />
      </Box>
    </Flex>
  );
};

export default ToDoCard;
