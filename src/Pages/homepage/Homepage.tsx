import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { Box, CardMedia, Typography } from '@mui/material'
import image from './../../Assets/img.jpg'
import Grid from '@mui/material/Grid2';
import Carousal from '../../Components/Carousal';

const Homepage = () => {

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            {/* <img src={image} alt="" /> */}
            <Carousal/>
            <Typography variant='h6'>Your Event Planner</Typography>
            <CardMedia
                component="img"
                image={image}
                sx={{ objectPosition: 'top', height: { xs: '200px', md: '450px', lg: '550px' } }}
                alt="Paella dish"
            />
            <Typography variant='h6'>What we Offer</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid sx={{height:'300px',display:'flex',border:'1px solid green'}} size={{xs:6 , md:6 , lg:6}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                         sx={{objectFit:'cover',height:'100%',width:'50%'}}
                         />
                        <Typography>Corporate Events</Typography>
                    </Grid>
                    <Grid sx={{height:'300px',display:'flex',border:'1px solid green'}} size={{xs:6 , md:6 , lg:6}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                         sx={{objectFit:'cover',height:'100%',width:'50%'}}
                         />
                        <Typography> Social Events</Typography>
                    </Grid>
                    <Grid sx={{height:'300px',display:'flex',border:'1px solid green'}} size={{xs:6 , md:6 , lg:6}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                         sx={{objectFit:'cover',height:'100%',width:'50%'}}
                         />
                        <Typography>Cultural Events</Typography>
                    </Grid>
                    <Grid sx={{height:'300px',display:'flex',border:'1px solid green'}} size={{xs:6 , md:6 , lg:6}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                         sx={{objectFit:'cover',height:'100%',width:'50%'}}
                         />
                        <Typography>Charity Events</Typography>
                    </Grid>
                    <Grid sx={{height:'300px',display:'flex',border:'1px solid green'}} size={{xs:6 , md:6 , lg:6}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_1258062861.jpg'}
                         sx={{objectFit:'cover',height:'100%',width:'50%'}}
                         />
                        <Typography>Educational Events</Typography>
                    </Grid>
                    <Grid sx={{aspectRatio:'1/1',p:2,display:'flex',flexDirection:'column'}} size={{xs:6 , md:4 , lg:4}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_256492474.jpg'}
                         sx={{objectFit:'cover',aspectRatio:'1/1',width:'90%',margin:'auto',}}
                         />
                        <Typography>
                            Sports Event
                        </Typography>
                    </Grid>
                
                </Grid>

            </Box>
                <Typography variant='h6'>Our Happy Clients</Typography>
                <Box sx={{ flexGrow: 1 ,width:'85%',margin:'auto'}}>
                <Grid container spacing={2}>
                
                   
                    <Grid sx={{aspectRatio:'1/1',p:2,display:'flex',flexDirection:'column'}} size={{xs:6 , md:4 , lg:4}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_256492474.jpg'}
                         sx={{objectFit:'cover',aspectRatio:'1/1',width:'100%',borderRadius:'50%'}}
                         />
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                    <Grid sx={{aspectRatio:'1/1',p:2,display:'flex',flexDirection:'column'}} size={{xs:6 , md:4 , lg:4}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_256492474.jpg'}
                         sx={{objectFit:'cover',aspectRatio:'1/1',width:'100%',borderRadius:'50%'}}
                         />
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                    <Grid sx={{aspectRatio:'1/1',p:2,display:'flex',flexDirection:'column'}} size={{xs:6 , md:4 , lg:4}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_256492474.jpg'}
                         sx={{objectFit:'cover',aspectRatio:'1/1',width:'100%',borderRadius:'50%'}}
                         />
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                    <Grid sx={{aspectRatio:'1/1',p:2,display:'flex',flexDirection:'column'}} size={{xs:6 , md:4 , lg:4}}>
                        <CardMedia
                         component="img"
                         image={'https://demo.ovathemes.com/eventmana/wp-content/uploads/2015/09/shutterstock_256492474.jpg'}
                         sx={{objectFit:'cover',aspectRatio:'1/1',width:'100%',borderRadius:'50%'}}
                         />
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                   
                   
                    
                
                </Grid>

            </Box>
        </Box>
    )
}

export default Homepage