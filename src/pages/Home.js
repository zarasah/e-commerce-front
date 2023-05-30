import { Box } from '@mui/material';
// import Banner from '../components/Banner';
import { shades } from '../theme/theme';
import Carusel from '../components/Carusel';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';


export default function Home() {
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
