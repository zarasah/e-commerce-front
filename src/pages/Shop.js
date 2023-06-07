import './Shop.css';
import Item from '../components/Item';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../store/productSlice';
import { fetchCategoriesRequest } from '../store/categorySlice'; 
import { Typography } from '@mui/material';
import Sidebar from '../components/SideBar';


export default function Shop() {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.product.products);
    const categories = useSelector((state) => state.category.categories);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    console.log('cat from shop', categories)
    useEffect(() => {
        dispatch(fetchProductsRequest());
        dispatch(fetchCategoriesRequest());
    }, [dispatch]);

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


// return (
//     <div>
//       <Typography variant="h4">Categories</Typography>
//       <Grid container spacing={2}>
//         {categories.map((category) => (
//           <Grid item key={category.id}>
//             <Typography>{category.name}</Typography>
//           </Grid>
//         ))}
//       </Grid>

//       <Typography variant="h4">Products</Typography>
//       <Grid container spacing={2}>
//         {products.map((product) => (
//           <Grid item key={product.id}>
//             <Typography>{product.name}</Typography>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   )