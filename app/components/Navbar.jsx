import { Box, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
     <Container
     sx={{  width:"100vw",position:'absolute', zIndex:1, display:'flex',
        flexDirection:'row',justifyContent:"space-between", p:3
     }}
     >
        <Link href='/'>
        <Box
        sx={{':hover':{cursor:'pointer'}}}>
            <img src="/images/logo.png" alt="Fatima Azeemi" height={25} />
            </Box>
        </Link>
        
        <Typography color='yellow'>Login / Signup</Typography>
     </Container>
  )
}

export default Navbar