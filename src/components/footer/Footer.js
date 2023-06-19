import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
    return (
        <div className = "footer">
            <div className = "footer-left">
                <h5>Pages</h5>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/blog">Blog</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                </ul>
            </div>
            <div className = "footer-center">
                <h5>Shop</h5>
                <ul>
                    <li><Link to = "/#">All products</Link></li>
                    <li><Link to = "/#">Accessories</Link></li>
                    <li><Link to = "/#">Clothes</Link></li>
                    <li><Link to = "/#">Perfume</Link></li>
                    <li><Link to = "/#">Shoes</Link></li>
                </ul>
            </div>
            <div className = "footer-right">
                <ul className = "brands">
                    <li><Link to = "https://www.facebook.com" target = "_blank" rel='noreferrer'><FacebookIcon /></Link></li>
                    <li><Link to = "https://www.instagram.com/" target = "_blank" rel='noreferrer'><InstagramIcon /></Link></li>
                    <li><Link to = "https://twitter.com/?lang=ru" target = "_blank" rel='noreferrer'><TwitterIcon /></Link></li>
                </ul>
            </div>
        </div>
    );
}