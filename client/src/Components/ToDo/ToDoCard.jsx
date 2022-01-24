import { Box, IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";

const ToDoCard = ({ toDo, completed }) => {
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
    </Box>
  );
};

export default ToDoCard;
