import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, InputAdornment, Button} from '@mui/material';
import { Search } from '@mui/icons-material';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import { shades } from '../../theme/theme';

export default function Header() {
    const navigate = useNavigate();
    return (
        <AppBar position="fixed" sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(248, 248, 248)',  boxShadow: 'none', marginBottom: '10px' }}>
          <Toolbar sx = {{width: "90%"}}>
            {/* Logo */}
            <img src={logo} alt="Logo" onClick = {() => navigate('/')} style={{ width: '150px', height: '70px', marginRight: '1rem', cursor: 'pointer' }} /> 
            {/* Navigation */}
            <div style={{ 
                display: 'flex',
                alignItems: 'center', 
                marginRight: 'auto' }}>
              <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
                <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Home
                </a>
              </Typography>
              <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
                <a href="/shop" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Shop
                </a>
              </Typography>
              <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
                <a href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Blog
                </a>
              </Typography>
              <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
                <a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                  About
                </a>
              </Typography>
              <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
                <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Contact
                </a>
              </Typography>
            </div>
    
            {/* Search Bar */}
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                <InputBase placeholder="Search..." 
                    startAdornment={
                        <InputAdornment position="start">
                            <Search style={{ marginRight: '1rem', color: 'orange'}} />
                        </InputAdornment>
                    }
                    sx = {{
                        border: '1px solid black',
                        borderRadius: '50px',
                        height: '30px',
                        
                    }}
                />
            </div>

            {/* Login Button */}
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
              <Button variant="text" sx={{ textTransform: 'none', fontSize: '16px' }} onClick = {() => {navigate('/login')}}>
                Login
              </Button>
            </div>
    
            {/* Shopping Cart */}
            <IconButton color="inherit">
              <Badge badgeContent={17} color='default' sx={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '40px', 
                height: '40px', 
                border: '1' || 'solid' || shades.secondary[500], 
                borderRadius: '50%', 
                backgroundColor: shades.secondary[500], 
                color: 'black'}} 
                invisible = {true}>
                <LocalMallRoundedIcon style={{ backgroundColor: shades.secondary[500], color: 'black' }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      );
}