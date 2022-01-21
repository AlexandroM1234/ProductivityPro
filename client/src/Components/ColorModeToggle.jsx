import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      id="colorModeToggle"
      aria-label="Color Mode Toggle Button"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={() => toggleColorMode()}
    />
  );
};

export default ColorModeToggle;
