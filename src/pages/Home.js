import { Box } from '@mui/material';
// import Banner from '../components/Banner';
import { useEffect } from 'react';
// import { shades } from '../theme/theme';
import Carusel from '../components/Carusel';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';

import { useDispatch } from 'react-redux';
import { fetchProductsRequest } from '../store/productSlice';
import { Link } from "react-router-dom";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsRequest());        
    }, [dispatch]);

    return (
        <div>
            <Box marginTop = '100px' >
                <Carusel />
            </Box>
            <Box marginTop = '100px' sx= {{display: 'flex', flexDirection: 'column', gap: '70px'}}>
                <CategoriesList />
                <ProductsList />
            </Box>
        </div>
    )
}
