import { Box, Button, Typography } from '@mui/material';
// import banner from '../images/banner/banner1.jpg';
import banner from '../images/banner/banner1-PhotoRoom.png-PhotoRoom.png';
import { shades } from '../theme/theme';


export default function Banner() {
    return (
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <img
                src={banner}
                alt="banner1"
                style={{ width: '100%', height: 'auto' }}
            />
            <Box
                sx={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '10px',
                }}
            >
                <Typography variant="body1" fontSize={50} color={shades.orange[400]}>New Collection</Typography>
                <Typography variant="body1" fontSize={28} color={shades.primary[400]}>
                    <p style={{ margin: '0.5rem 0' }}>Get set for every</p> 
                    <p style={{ margin: '0.1rem 0 3rem 0' }}>celebratory moment...</p>
                </Typography>
                <Button 
                    sx = {{
                        width: '200px',
                        border: '1px solid black',
                        borderRadius: '50px',
                        height: '30px',
                        
                    }}
                >
                    Shop Now
                </Button>
            </Box>
        </Box>
    )
}