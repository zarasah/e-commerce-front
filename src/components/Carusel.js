import Carousel from 'react-material-ui-carousel';
import { Button, Box, Typography } from '@mui/material';
import banner1 from '../images/banner/banner1.png';
import banner2 from '../images/banner/banner2.jpg';
import { shades } from '../theme/theme';
import { Link } from 'react-router-dom';

export default function Carusel(props)
{
    var items = [
        {
            name: "New Collection",
            description: "Get set for every celebratory moment...",
            img: 1
        },
        {
            name: "UP TO 70% OFF",
            description: "Mega sale event!",
            img: 2
        }
    ]

    return (
        <Carousel  duration={1000} interval = {8000} animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {
    const img = props.item.img === 1 ? banner1 : banner2;
    const leftValue = props.item.img === 1 ? '-10px' : '500px';
    return (
        <Box style={{display:'flex', justifyContent: 'center', alignContent: 'center'}}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <img
                src= {img}
                alt="banner1"
                style={{ width: '100%', height: '600px' }}
            />
            <Box
                sx={{
                position: 'absolute',
                top: '10px',
                left: `${leftValue}`,
                // left: '10px',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '10px',
                }}
            >
                <Typography variant="body1" fontSize={50} color={shades.orange[400]}>{props.item.name}</Typography>
                <Typography variant="body1" fontSize={28} color={shades.primary[400]} sx={{width: '200px'}}>
                    {props.item.description}
                </Typography>
                <Link to="/shop" style={{ textDecoration: 'none' }}>
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
                </Link>
            </Box>
        </Box>
        </Box>
    )
}