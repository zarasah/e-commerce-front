import './Shop.css';
import Item from '../components/Item';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation  } from 'react-router-dom';
import { fetchProductsRequest, fetchProductsByCategoryRequest } from '../store/productSlice';
import { fetchCategoriesRequest } from '../store/categorySlice'; 
import { Typography, Pagination } from '@mui/material';
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
    const count = Math.ceil(products.length / 6);
    const [page, setPage] = useState(1);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    };
    
    const startIndex = (page - 1) * 6;
    const endIndex = startIndex + 6;
    const displayedItems = products.slice(startIndex, endIndex);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        if (category) {
            const selectedCategory = categories.find(obj => obj.name === category);
            const id = selectedCategory.id;
            setPage(1);
            dispatch(fetchProductsByCategoryRequest(id));
            dispatch(fetchCategoriesRequest());
        } else {
            dispatch(fetchProductsRequest());
            dispatch(fetchCategoriesRequest());
        }
        
    }, [dispatch, category]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error}</Typography>;
    }

    return (
        <div className='shop'>
            <div className='shopwrapper'>
                <div className='right'>
                    <Sidebar categories = { categories }/>
                </div>
                <div className = "items">
                    {displayedItems?.map((data) => {
                        return <Item key = {data.id} data = {data} />
                    })}
                </div>
            </div>
            {
                products.length > 6 && (
                    <div className='pagination'>
                        <Pagination
                            component="div"
                            count={count}
                            page={page}
                            color="secondary"
                            onChange={handleChangePage}
                        />
                    </div>
                )
            }
        </div>
        
    )
}