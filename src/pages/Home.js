import { Box } from '@mui/material';
import { useEffect } from 'react';
import Carusel from '../components/Carusel';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';
import { useDispatch } from 'react-redux';
import { fetchProductsRequest } from '../store/productSlice';

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
