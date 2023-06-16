import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './ProductPage.css';

const ProductDetails = () => {
  const productId = useParams().id;
  const products = useSelector(state => state.product.products);
  const product = products.find(item => item.id === +productId);
    console.log(product)
  return (
    <div className = "selected">
        <div className="selected-left">
            <img alt = {product.name} src = {product.image}/>
        </div>
        <div className = "selected-right">
            <h2>{product.name}</h2>
            <h5>Price $ {product.price} USA</h5>
            <p>{product.description}</p>
        </div>
        <Link to = '/shop'>Go to Shop</Link>
    </div>
)
//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         alt={product.name}
//         height="200"
//         image={product.image}
//       />
//       <CardContent>
//         <Typography variant="h5">{product.name}</Typography>
//         <Typography variant="subtitle1">{product.price}</Typography>
//         <Typography variant="body2">{product.description}</Typography>
//       </CardContent>
//     </Card>
//   );
};

export default ProductDetails;