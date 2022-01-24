import { Box, IconButton } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";

const ToDoCard = ({ toDo, completed, deleteToDo }) => {
  return (
    <Box>
      <p>{toDo.task}</p>
      <IconButton
        aria-label="Mark To Do Completed"
        icon={<CheckIcon />}
        onClick={() => {
          completed(toDo.id);
        }}
      />
      <IconButton
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
