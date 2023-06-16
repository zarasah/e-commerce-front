import DashboardSideBar from '../components/DashboardSideBar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../store/userSlice';
import { fetchCategoriesRequest } from '../store/categorySlice';
import { fetchProductsRequest } from '../store/productSlice';

export default function Dashboard() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsersRequest());
        dispatch(fetchCategoriesRequest());
        dispatch(fetchProductsRequest());
    }, [dispatch])
    return (
        <>
            <DashboardSideBar />             
            <Outlet />
        </>
        
    )
}