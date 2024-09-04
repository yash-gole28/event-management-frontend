import React from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';


const Footer = () => {
    const theme = useTheme();
  return (
    <Box sx={{height:'200px',
        backgroundColor:theme.palette.primary.main
    }}>
        <Typography variant='h6' sx={{color:theme.palette.background.default}}>Footer</Typography>
    </Box>
  )
}

export default Footer