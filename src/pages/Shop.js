import './Shop.css';
import Item from '../components/Item';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation  } from 'react-router-dom';
import { fetchProductsRequest, fetchProductsByCategoryRequest } from '../store/productSlice';
import { fetchCategoriesRequest } from '../store/categorySlice'; 
import { Typography } from '@mui/material';
import Sidebar from '../components/SideBar';


export default function Shop() {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const products = useSelector((state) => state.product.products);
    const categories = useSelector((state) => state.category.categories);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        if (category) {
            const selectedCategory = categories.find(obj => obj.name === category);
            const id = selectedCategory.id;

            dispatch(fetchProductsByCategoryRequest(id));
            dispatch(fetchCategoriesRequest());
        } else {
            console.log('else')
            dispatch(fetchProductsRequest());
            dispatch(fetchCategoriesRequest());
        }
        
    }, [dispatch, category]);

    console.log('filtric heto', products)

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error}</Typography>;
    }

    return (
        <div className='shopwrapper'>
            <div className='right'>
                <Sidebar categories = { categories }/>
            </div>
            <div className = "items">
                {products?.map((data) => {
                    return <Item key = {data.id} data = {data} />
                })}
            </div>
        </div>
    )
}