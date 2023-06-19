import { Box, Grid, Typography } from '@mui/material';
import clothes from '../images/categories/clothes.jpg';
import shoes from '../images/categories/shoes.png';
import parfum from '../images/categories/parfum.jpg';
import accessory from '../images/categories/accessory.jpg';


export default function QuiltedImageList() {
    return ( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px'
        }}>
            <Typography variant="body1" fontSize={50}>Categories</Typography>
            <Box sx={{ width: '80%', height: '500px', marginTop: '10px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} rowSpan={2} height={"480px"}>
                        <img src={clothes} alt="clothes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Grid>
                    <Grid item container xs={12} md={6} spacing={2} height={"250px"}>
                        <Grid item xs={12} md={6}>
                            <img src={shoes} alt="shoes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={parfum} alt="parfum" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Grid>
                        <Grid item xs={12} md={12} height={"225px"}>
                            <img src={accessory} alt="accessory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}