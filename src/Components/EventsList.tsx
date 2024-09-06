import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Button, CardMedia, Typography } from '@mui/material'

const EventsList = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid sx={{ height: '300px', display: 'flex', justifyContent: 'space-between' }} size={{ xs: 6, md: 6, lg: 6 }}>
                        <CardMedia
                            component="img"
                            image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                            sx={{ objectFit: 'cover', height: '100%', width: '30%', borderRadius: '10px' }}
                        />
                        <Box sx={{ width: '65%', p: '1rem' }}>
                            <Typography variant='h6'>Corporate Events</Typography>
                            <Typography variant='h6' sx={{ fontSize: '14px', color: 'grey', mt: '.5rem' }}> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(243, 55, 55)', mt: '1rem' }}>Tickets from Rs. 150</Typography>
                            <Typography sx={{fontSize:'14px',mt:'1rem'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit  </Typography>
                            <Button variant='contained'sx={{color:'grey',mt:'1rem'}}>Tickets and Details</Button>
                        </Box>
                    </Grid>
                    <Grid sx={{ height: '300px', display: 'flex', justifyContent: 'space-between' }} size={{ xs: 6, md: 6, lg: 6 }}>
                        <CardMedia
                            component="img"
                            image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                            sx={{ objectFit: 'cover', height: '100%', width: '30%', borderRadius: '10px' }}
                        />
                        <Box sx={{ width: '65%', p: '1rem' }}>
                            <Typography variant='h6'>Corporate Events</Typography>
                            <Typography variant='h6' sx={{ fontSize: '14px', color: 'grey', mt: '.5rem' }}> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(243, 55, 55)', mt: '1rem' }}>Tickets from Rs. 150</Typography>
                            <Typography sx={{fontSize:'14px',mt:'1rem'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit  </Typography>
                            <Button variant='contained'sx={{color:'grey',mt:'1rem'}}>Tickets and Details</Button>
                        </Box>
                    </Grid>
                    <Grid sx={{ height: '300px', display: 'flex', justifyContent: 'space-between' }} size={{ xs: 6, md: 6, lg: 6 }}>
                        <CardMedia
                            component="img"
                            image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                            sx={{ objectFit: 'cover', height: '100%', width: '30%', borderRadius: '10px' }}
                        />
                        <Box sx={{ width: '65%', p: '1rem' }}>
                            <Typography variant='h6'>Corporate Events</Typography>
                            <Typography variant='h6' sx={{ fontSize: '14px', color: 'grey', mt: '.5rem' }}> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(243, 55, 55)', mt: '1rem' }}>Tickets from Rs. 150</Typography>
                            <Typography sx={{fontSize:'14px',mt:'1rem'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit  </Typography>
                            <Button variant='contained'sx={{color:'grey',mt:'1rem'}}>Tickets and Details</Button>
                        </Box>
                    </Grid>
                    <Grid sx={{ height: '300px', display: 'flex', justifyContent: 'space-between' }} size={{ xs: 6, md: 6, lg: 6 }}>
                        <CardMedia
                            component="img"
                            image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                            sx={{ objectFit: 'cover', height: '100%', width: '30%', borderRadius: '10px' }}
                        />
                        <Box sx={{ width: '65%', p: '1rem' }}>
                            <Typography variant='h6'>Corporate Events</Typography>
                            <Typography variant='h6' sx={{ fontSize: '14px', color: 'grey', mt: '.5rem' }}> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(243, 55, 55)', mt: '1rem' }}>Tickets from Rs. 150</Typography>
                            <Typography sx={{fontSize:'14px',mt:'1rem'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit  </Typography>
                            <Button variant='contained'sx={{color:'grey',mt:'1rem'}}>Tickets and Details</Button>
                        </Box>
                    </Grid>
                    <Grid sx={{ height: '300px', display: 'flex', justifyContent: 'space-between' }} size={{ xs: 6, md: 6, lg: 6 }}>
                        <CardMedia
                            component="img"
                            image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                            sx={{ objectFit: 'cover', height: '100%', width: '30%', borderRadius: '10px' }}
                        />
                        <Box sx={{ width: '65%', p: '1rem' }}>
                            <Typography variant='h6'>Corporate Events</Typography>
                            <Typography variant='h6' sx={{ fontSize: '14px', color: 'grey', mt: '.5rem' }}> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(243, 55, 55)', mt: '1rem' }}>Tickets from Rs. 150</Typography>
                            <Typography sx={{fontSize:'14px',mt:'1rem'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit  </Typography>
                            <Button variant='contained'sx={{color:'grey',mt:'1rem'}}>Tickets and Details</Button>
                        </Box>
                    </Grid>
                    


                </Grid>

            </Box>
        </div>
    )
}

export default EventsList