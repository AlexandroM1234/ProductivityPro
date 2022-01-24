import { Box } from "@chakra-ui/react";
import React from "react";

const ToDoCard = ({ toDo }) => {
  return (
    <Box>
      <p>{toDo.task}</p>
    </Box>
  );
};

export default ToDoCard;
