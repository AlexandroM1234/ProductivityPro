import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ToDoList from "./ToDoList";

const ToDo = () => {
  // To Do state as we type into the input
  const [toDo, setToDo] = useState("");

  // List of all the To Dos
  const [toDos, setToDos] = useState([]);

  // Handle Submit for when we press the submit button of the To Do Form
  const handleSubmit = (e) => {
    // Prevent Default to stop the page from refreshing
    e.preventDefault();
    // Creating a new task object to add into the toDos state
    const newTask = {
      id: Date.now(),
      task: toDo,
      completed: false,
    };

    // Then setToDos to a new array while spreading in the previous toDos and then adding in the new task object
    setToDos([...toDos, newTask]);
    // once submitted set ToDo to an empty string to reset what's in the input
    setToDo("");
  };

  // Handle change function to keep track of whats being typed in the input to be updated with state
  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  // Completed To Do function to mark a to do completed
  const completedToDo = (id) => {
    // Have a copy of the to dos
    const newToDos = [...toDos];
    // Find the to do to mark completed
    const completed = newToDos.find((td) => td.id === id);
    // set the completed to True
    completed.completed = true;
    // then set the to dos to the new to dos
    setToDos(newToDos);
  };

  const deleteToDo = (id) => {
    const filteredToDos = toDos.filter((td) => td.id !== id);
    setToDos(filteredToDos);
  };

  return (
    <Box w={"100%"} h={"100%"}>
      {/* Heading Section  */}
      <Flex justifyContent={"center"} margin={5} h={32}>
        <Heading size={"xl"}>To Do List</Heading>
      </Flex>
      {/* Main Content Container */}
      <Flex
        justifyContent={"space-around"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {/* Form Container  */}
        <Flex margin={4}>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <Input
                name="task"
                value={toDo}
                onChange={handleChange}
                placeholder="Insert a To Do"
              />
            </FormControl>

            <Button type="submit">Submit</Button>
          </form>
        </Flex>

        {/* To Do List */}
        <ToDoList
          toDos={toDos}
          completed={completedToDo}
          deleteToDo={deleteToDo}
        />
      </Flex>
    </Box>
  );
};

export default ToDo;
