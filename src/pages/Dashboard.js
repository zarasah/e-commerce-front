import { Link } from "react-router-dom";
import ProductsList from '../components/ProductsList';

export default function Dashboard() {
    return (
        <div style={{marginTop: "200px"}}>
            <h1>Dashboard</h1>
            <h1>Dashboard</h1>
            <h1>Dashboard</h1>
            <h1>Dashboard</h1>
            <ProductsList />
            <Link to = '/'>Go Home</Link>
        </div>
    )
}