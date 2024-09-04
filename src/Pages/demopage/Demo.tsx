import { Box, Typography} from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';

const Demo = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Typography>size=8</Typography>
        </Grid>
        <Grid size={4}>
          <Typography>size=4</Typography>
        </Grid>
        <Grid size={4}>
          <Typography>size=4</Typography>
        </Grid>
        <Grid size={8}>
          <Typography>size=8</Typography>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Demo