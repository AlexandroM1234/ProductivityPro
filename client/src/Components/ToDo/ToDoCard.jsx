import { Box, IconButton, Text } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";

const ToDoCard = ({ toDo, completed, deleteToDo }) => {
  return (
    <Box className="toDoCard">
      <Text
        className="toDoText"
        textDecorationLine={toDo.completed === true ? "line-through" : ""}
      >
        {toDo.task}
      </Text>
      <IconButton
        className="completeButton"
        aria-label="Mark To Do Completed"
        icon={<CheckIcon />}
        onClick={() => {
          completed(toDo.id);
        }}
      />
      <IconButton
        className="deleteButton"
        aria-label="Delete To Do"
        icon={<DeleteIcon />}
        onClick={() => {
          deleteToDo(toDo.id);
        }}
      />
    </Box>
  );
};

export default ToDoCard;
