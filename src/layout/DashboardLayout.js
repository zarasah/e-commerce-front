import DashboardSideBar from '../components/DashboardSideBar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../store/userSlice';
import { fetchCategoriesRequest } from '../store/categorySlice';
import { fetchProductsRequest } from '../store/productSlice';
import { useLocation } from 'react-router-dom';
import { Typography, Container, Paper, Card, CardContent, Grid } from '@mui/material';

export default function Dashboard() {
    const location = useLocation();
    const path = location.pathname;
    const pathParts = path.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    let hasOutlet = lastPart === 'dashboard' ? true : false;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersRequest());
        dispatch(fetchCategoriesRequest());
        dispatch(fetchProductsRequest());
    }, [dispatch])
    return (
        <>
            <DashboardSideBar />
            {hasOutlet && (
                <div style={{minHeight: '100vh'}}>
                    <Container maxWidth="lg" sx={{marginTop: '120px'}}>
                        <Paper style={{ padding: '24px', marginTop: '24px' }}>
                        <Typography variant="h1" gutterBottom>
                            Admin Dashboard
                        </Typography>
                        <Typography variant="body1" sx={{marginBottom: '40px'}}>
                            Welcome to the admin dashboard! Here, you can manage various aspects of your application.
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Users
                                </Typography>
                                <Typography variant="body1">
                                    Manage user accounts and permissions.
                                </Typography>
                                </CardContent>
                            </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Categories
                                </Typography>
                                <Typography variant="body1">
                                    Organize and manage product categories.
                                </Typography>
                                </CardContent>
                            </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Products
                                </Typography>
                                <Typography variant="body1">
                                    Add, edit, and delete product listings.
                                </Typography>
                                </CardContent>
                            </Card>
                            </Grid>
                        </Grid>
                        </Paper>
                    </Container>
                </div>
            )}
            <Outlet />
        </>
        
    )
}