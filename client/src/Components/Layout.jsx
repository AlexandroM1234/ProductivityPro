import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import GlobalNav from "./GlobalNav";

const Layout = () => {
  return (
    <Box>
      <GlobalNav />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
