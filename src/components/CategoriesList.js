import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import clothes from '../images/categories/clothes.jpg';
import shoes from '../images/categories/shoes.png';
import parfum from '../images/categories/parfum.jpg';
import accessory from '../images/categories/accessory.jpg';
import { useNavigate } from 'react-router-dom';


export default function QuiltedImageList() {
    const navigate = useNavigate();

    function handleClothesClick() {
        navigate('/shop?category=Clothes');
    }

    function handleShoesClick() {
        navigate('/shop?category=Shoes');
    }

    function handlePerfumeClick() {
        navigate('/shop?category=Perfume');
    }

    function handleAccessoriesClick() {
        navigate('/shop?category=Accessories');
    }

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
                    <Grid item xs={12} md={6} rowSpan={2} height={"480px"} position="relative" >
                        <img src={clothes} alt="clothes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <Button onClick={handleClothesClick} variant="contained" style={{ backgroundColor: 'ButtonShadow', position: 'absolute', color: 'black', fontSize: '28px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>  
                            Clothes
                        </Button>
                    </Grid>
                    <Grid item container xs={12} md={6} spacing={2} height={"250px"}>
                        <Grid item xs={12} md={6} position="relative">
                            <img src={shoes} alt="shoes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <Button onClick={handleShoesClick} variant="contained" style={{ backgroundColor: 'ButtonShadow', position: 'absolute', color: 'black', fontSize: '22px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>  
                                Shoes
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} position="relative">
                            <img src={parfum} alt="parfum" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <Button onClick={handlePerfumeClick} variant="contained" style={{ backgroundColor: 'ButtonShadow', position: 'absolute', color: 'black', fontSize: '22px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>  
                                Perfume
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={12} height={"225px"} position="relative">
                            <img src={accessory} alt="accessory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <Button onClick={handleAccessoriesClick} variant="contained" style={{ backgroundColor: 'ButtonShadow', position: 'absolute', color: 'black', fontSize: '26px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>  
                                Accessories
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

// backgroundColor: 'transparent'