import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartItemAddRequest } from '../store/cartItemSlice'; 

export default function Item(props) {
    const { name, price, image, id } = props.data;
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function handleMouseOver() {
        setActive(true);
    }

    function handleMouseOut() {
        setActive(false);
    }

    function handelClick(id) {
        navigate(`/product/${id}`)
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
                <img src = {image} alt = {name} className = "item-img" onClick={() => handelClick(id)}/>
            </div>
            <div className = "discrip">
                <h4 onClick={() => handelClick(id)}>{name}</h4>
                <p>$ {price} USD</p>
                <input type = "submit" value = "ADD TO CART" className = {isActive ? 'add-btn-active' : 'add-btn'} onClick = {() => {handleAddToCart(props.data)}}/>
            </div>
        </div>
    )
}

// onClick = {() => {props.onHistory(props.data)}} ???


