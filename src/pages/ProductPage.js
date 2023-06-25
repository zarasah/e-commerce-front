import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { cartItemAddRequest } from '../store/cartItemSlice';
import './ProductPage.css';

const buttobStyle = {
  background: 'rgb(245, 172, 107)',
  color: '#FFFFFF',
  cursor: 'pointer',
  textDecoration: 'none'
}

const ProductDetails = () => {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const products = useSelector(state => state.product.products);
  const product = products.find(item => item.id === +productId);
  
  function handleAddToCart() {
    const userId = localStorage.getItem('id');
    if (userId) {
        dispatch(cartItemAddRequest({userId, id: productId}));
    } else {
        const existingCart = JSON.parse(localStorage.getItem('cart'));
        const cartArray = Array.isArray(existingCart) ? existingCart : [];
        const targetIndex = cartArray.findIndex(item => item.product.id === productId);

        if (targetIndex !== -1) {
            cartArray[targetIndex].count++;
        } else {
            const newProduct = {
                product: product,
                count: 1
            }
            cartArray.push(newProduct);
        }
        
        localStorage.setItem('cart', JSON.stringify(cartArray));
    }
}

  return (
    <div className = "selected">
        <div className="selected-left">
            <img alt = {product.name} src = {product.image}/>
        </div>
        <div className = "selected-right">
            <h2>{product.name}</h2>
            <h5>Price $ {product.price} USA</h5>
            <p>{product.description}</p>
            <div style = {{
              marginTop: '2%',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Button onClick={handleAddToCart} style={buttobStyle}>Add to Cart</Button>
              <Button style={buttobStyle}><Link to = '/shop' style={buttobStyle}>Go to Shop</Link></Button>
            </div>
        </div>
    </div>
)
};

export default ProductDetails;