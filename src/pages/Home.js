import { Box } from '@mui/material';
// import Banner from '../components/Banner';
import { useEffect } from 'react';
import { shades } from '../theme/theme';
import Carusel from '../components/Carusel';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';

import { useDispatch, useSelector} from 'react-redux'; // delete
import { fetchProductsRequest } from '../store/productSlice'; //del


export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect')
        dispatch(fetchProductsRequest());
        console.log('end useEffect')
        
    }, [dispatch]);

    return (<>
        <Box marginTop = '100px' >
            {/* <Carusel /> */}
        </Box>
        <Box marginTop = '100px' >
            <CategoriesList />
            <ProductsList />
        </Box>
    </>
        
        // <Box sx={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     marginTop: '100px',
        //   }}>
        //   <Banner />
        //   <Carusel />
        // </Box>
    )
}
