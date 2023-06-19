import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography  } from '@mui/material';

export default function ProductsList() {
    let allProducts = useSelector((state) => state.product.products);
    const sorted = [...allProducts].sort(() => Math.random() - 0.5)
    const products = sorted.slice(0, 4);

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '100px'
      }}>
        <Typography variant="body1" fontSize={50} style={{ borderBottom: '1px solid black'}}>Our Bestsellers</Typography>
        <Grid container spacing={2} style={{ width: '85%' }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    alt={product.name}
                    height="200"
                    image={product.image}
                    title={product.name}
                    style={{ height: '300px', width: '200px' }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h2" style={{ fontSize: '18px' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Price: {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
  )
}