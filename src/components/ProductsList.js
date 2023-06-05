import { useSelector} from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography  } from '@mui/material';

export default function ProductsList() {
    const products = useSelector((state) => state.product.products);
    console.log(products)
   
    return (
        <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="200"
              image={product.image}
              title={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Price: {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
        // <div>
        //     <h1>Products</h1>
        //     <div>
        //         {
        //             products?.map((item) => {
        //                 return <div key = {item.id}> {item.name}, {item.price} </div>
        //             })
        //         }
        //     </div>
        // </div>
    )
}