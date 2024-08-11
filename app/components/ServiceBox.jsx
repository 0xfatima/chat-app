import React from 'react'
import { Typography } from '@mui/material'

export const Feature=(props)=>{
    return(
        <Typography fontWeight='bold' textAlign='center'>
           {props.feature}
        </Typography>
    )
}

export const Reason=(props)=>{
    return(
        <Typography fontWeight='bold' variant='h6' textAlign='left' fontSize={17}>
           <li>{props.reason}</li>
           <Typography textAlign='left'>
          {props.detail}
        </Typography>
        </Typography>
    )
}