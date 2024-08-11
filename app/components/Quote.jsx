"use client";
/** @jsxImportSource @emotion/react */
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { appearing } from "./Animations";

const Quote = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const theme = useTheme();
  const appearingEffect = css`
    animation: ${appearing} 3s ${theme.transitions.easing.easeIn} forwards;
    animation-play-state: ${inView ? "running" : "paused"};
  `;
  return (
    <Box
      height="100vh"
      position="relative"
      sx={{
        background:
          "linear-gradient(90deg, rgba(1,83,5,1) 0%, rgba(71,201,14,1) 35%, rgba(127,211,5,1) 100%)",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,0L1440,160L1440,0L0,0Z"></path>
      </svg>

      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            width="60%"
            color="white"
            ref={ref}
            variant="h5"
            m={0}
            p={0}
            fontWeight="900"
            sx={{
              opacity: "0.8",
            }}
            css={appearingEffect}
          >
            &ldquo;The world is vast and full of stories waiting to be
            discovered. Let a friendly conversation help you unlock the journey
            that’s just right for you.&rdquo;
          </Typography>
        </Box>
      </Container>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "auto",
        }}
      >
        {" "}
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L1440,320L1440,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Quote;
