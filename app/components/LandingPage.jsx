import React from 'react'
import { Box, Typography } from "@mui/material";
const LandingPage = () => {
  return (
    <Box
    sx={{
      backgroundImage: `url('/images/background.png')`,
      position: "relative",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize:"cover",
      overflow: "hidden",
    }}
  >
    <Box
      height={350}
      bgcolor="purple"
      width={300}
      sx={{
        // transform: "rotate(7deg)",
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:2,
        boxShadow: '22px 30px 7px rgba(0, 0, 0, 0.5)',
        position: 'relative',
      }}
    >
      <Typography variant="h3" color='yellow' fontWeight='1000'>Wanderly</Typography>
      <Box width='80%' display='flex' flexDirection='row'  justifyContent='space-between' >
        <Box display='flex' flexDirection='column' justifyContent="flex-end" alignItems='flex-end'>
        <Typography variant="h5" color='yellow' fontWeight='1000' textAlign='left'>Travel</Typography>
        </Box>
        <img src="/images/homeimg.png" alt="" style={{position:'absolute',top:'32%',left:'42%',
          height:'70px',zIndex:'2'}}/>
        <Box >
          <Typography color='yellow' fontWeight='1000' textAlign='left'>The</Typography>
          <Typography  color='yellow' fontWeight='1000' textAlign='left'>World</Typography>
          </Box>
        </Box>
      <Box
        height={150}
        width={250}
        borderRadius={10}
        sx={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundClip: "content-box",
          zIndex:1,
        }}
      ></Box>
    </Box>
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
      <path
        fill="#fff"
        fillOpacity="1"
        d="M0,192L1440,320L1440,320L0,320Z"
      ></path>
    </svg>
  </Box>
  )
}

export default LandingPage