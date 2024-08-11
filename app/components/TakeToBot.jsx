"use client";
/** @jsxImportSource @emotion/react */
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { css} from "@emotion/react";
import { float } from "./Animations";
const TakeToBot = () => {
  const floatingEffect = css`
    animation: ${float} 20s infinite;
  `;

  return (
    <Container>
      <Box
        height="50vh"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src="/images/robo1.png"
          alt="Robot"
          height={150}
          css={floatingEffect} // Ensure the element's position is relative or absolute
        />

        <Link href="/chat">
          <Button
            variant="outlined"
            sx={{
              border: " 2px solid purple",
              color: "purple",
              height: 80,
              width: 300,
              transition: "background-color 0.5s ease-in-out",
              ":hover": {
                bgcolor: "purple",
                border: " 2px solid purple",
                color: "white",
              },
            }}
          >
            <Typography variant="h6" textTransform="capitalize">
              Take me to Chat assistant
            </Typography>
          </Button>
        </Link>
        <img src="/images/robo2.png" height={150} css={floatingEffect} />
      </Box>
    </Container>
  );
};

export default TakeToBot;
