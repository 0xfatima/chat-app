"use client";
/** @jsxImportSource @emotion/react */
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import LandingPage from "./components/LandingPage";
import TakeToBot from "./components/TakeToBot";
import Quote from "./components/Quote";
import Pricing from "./components/Pricing"; 

const Home = () => {
  return (
    <Box>
      <LandingPage />
      <TakeToBot />
      <Quote />
      <Pricing/>
    </Box>
  );
};

export default Home;
