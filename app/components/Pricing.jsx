import React from 'react'
import Card from './Card'
import {  Container, Stack, Typography } from '@mui/material'

const Pricing = () => {
  return (
    <Container sx={{
        display:'flex', justifyContent:'center', alignItems:'center', height:'100vh',
        flexDirection:'column', gap:4
    }}>
        <Typography variant='h3' color='purple' fontWeight='900'>
            Subscription Plans
        </Typography>
        <Stack direction='row' sx={{display:'flex', gap:7}} >

        <Card
        planType='Free Plan' cost='$0.00' 
        feature1='Basic LLM Chats' feature2='Limited Responses' feature3='Community Access'
        for='explore basic interactions with LLM'
        reason1='Cost-Free:' 
        reason2='Explore Basic Features:'
        reason3='Get Started Easily:' 
        detail1=' No commitment or payment required'
        detail2=' Perfect for casual interactions'
        detail3=' Simple and quick access to LLM chat capabilities'
        />
        <Card planType='Premium Plan' cost='$2.00' 
        feature1='Enhanced LLM Chats' 
        feature2='Priority Response' 
        feature3='Exclusive Features'
        for=' personalized interactions with LLM'
        reason1='Enhanced Experience:' 
        reason2='Priority Support:' 
        reason3='Advanced Insights:' 
        detail1=' Get tailored, in-depth responses from our LLM' 
        detail2=' Faster and more comprehensive assistance'
        detail3=' Access detailed analytics for better usage'
        />
        </Stack>
    </Container>
  )
}

export default Pricing