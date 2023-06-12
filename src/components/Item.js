import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartItemAddRequest } from '../store/cartItemSlice'; 

export default function Item(props) {
    const { name, price, img, id } = props.data;
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();

    function handleMouseOver() {
        setActive(true);
    }

    function handleMouseOut() {
        setActive(false);
    }

    function handleAddToCart(data) {
        const userId = localStorage.getItem('id');
        if (userId) {
            const id = data.id;
            dispatch(cartItemAddRequest({userId, id}));
        } else {
            const existingCart = JSON.parse(localStorage.getItem('cart'));
            const cartArray = Array.isArray(existingCart) ? existingCart : [];

            const targetIndex = cartArray.findIndex(item => item.product.id === id);

            if (targetIndex !== -1) {
                cartArray[targetIndex].count++;
            } else {
                const newProduct = {
                    product: data,
                    count: 1
                }
                cartArray.push(newProduct);
            }
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
    }

    return (
        <div className = "item" onMouseOver={handleMouseOver} onMouseOut = {handleMouseOut} >
            <div>
                <Link to = {`${id}`}><img src = {img} alt = {name} className = "item-img"/></Link>
            </div>
            <div className = "discrip">
                <h4>{name}</h4>
                <p>$ {price} USD</p>
                <input type = "submit" value = "ADD TO CART" className = {isActive ? 'add-btn-active' : 'add-btn'} onClick = {() => {handleAddToCart(props.data)}}/>
            </div>
        </div>
    )
}

// onClick = {() => {props.onHistory(props.data)}} ???