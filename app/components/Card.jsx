import { Box, Typography,Stack,Button } from '@mui/material'
import React from 'react'
import { Feature } from './ServiceBox'
import { Reason } from './ServiceBox'
const Card = (props) => {
  return (
    
    <Box sx={{position:'relative',height:350, width:300,perspective: '1000px', }}>

        <Box  sx={{position:'absolute',height:'100%', width:'100%',
        transformStyle: 'preserve-3d', transition:'all 0.5s ease',
        ':hover':{
            transform:'rotateY(180deg)'
        }
    }}>

        {/* front of the Card */}
        <Stack  color='purple' fontWeight='900' direction="column" sx={{
            backfaceVisibility: 'hidden', position:'absolute',
             height:'100%', width:'100%',borderRadius:2,p:2,display:'flex'
             ,justifyContent:'center',alignItems:'center',gap:2,
              boxShadow: '5px 5px 7px rgba(0, 0, 0, 0.2)', bgcolor:"#F9F5F6"

        }}>

        {/* heading */}
        <Stack gap={2}>
        <Typography variant='h4' textAlign='center'>
           {props.planType}
           <Typography textAlign='center'>
           {props.for}
        </Typography>
        </Typography>
        
        <Typography variant='h5' fontWeight='bold'  textAlign='center'>
          {props.cost}
          <Typography textAlign='center'>
           /month
        </Typography>
        </Typography>
        </Stack>

        {/* features */}
           <Box>
           <Feature feature= {props.feature1}/>
           <Feature feature= {props.feature2}/>
           <Feature feature= {props.feature3}/>     
           </Box>
        </Stack>



{/* //backside of Card */}

        <Stack  bgcolor='purple' color='#F3EDC8' gap={2} sx={{
            transform:'rotateY(180deg)',backfaceVisibility: 'hidden', 
            position:'absolute' ,height:'100%', width:'100%',borderRadius:2,p:3,
             display:'flex', justifyContent:'center', alignItems:'center',
        }}>
        <Stack direction='column' gap={1} sx={{
           
        }}>
        <Reason reason={props.reason1} detail={props.detail1}/>
        <Reason reason={props.reason2} detail={props.detail2}/>
        <Reason reason={props.reason3} detail={props.detail3}/>
        </Stack>
        <Button variant='contained' sx={{
            bgcolor:'#F3EDC8',
            border:'2px solid white', 
            color:'purple', 
            ':hover':{
                bgcolor:'transparent',
                border:'2px solid #F3EDC8',
                color:'#F3EDC8',

            }
        }} >Get Started</Button>
        </Stack>
    </Box>
    
    </Box>
  )
}

export default Card