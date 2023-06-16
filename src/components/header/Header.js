import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, InputAdornment, Button, Avatar, Menu, MenuItem, Drawer} from '@mui/material';
import { Search } from '@mui/icons-material';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import { shades } from '../../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/loginSlice';
import { useState } from 'react';
import Cart from '../../pages/Cart';

export default function Header() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
  const userName = localStorage.getItem('username');
  const role = localStorage.getItem('role');

  function handleMyAccount() {
    if (role === '0') {
      navigate('/user/account');
    } else if (role === '1') {
      navigate('/admin/account');
    }
  }

  function handleDashboard() {
    navigate('/admin/dashboard');
  }

  function handleLogout() {
    setAnchorEl(false);
    dispatch(logout());
    navigate('/');
  }

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  function handleMenuClose() {
    setAnchorEl(null);
  };

  function handleCartToggle() {
    setCartOpen(!isCartOpen);
  };

  function closeDrawer() {
    setCartOpen(false);
  };

  return (
      <AppBar position="fixed" sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(248, 248, 248)',  boxShadow: 'none', marginBottom: '10px', zIndex: 1201 }}>
        <Toolbar sx = {{width: "90%"}}>
          {/* Logo */}
          <img src={logo} alt="Logo" onClick = {() => navigate('/')} style={{ width: '150px', height: '70px', marginRight: '1rem', cursor: 'pointer' }} /> 
          {/* Navigation */}
          <div style={{ 
              display: 'flex',
              alignItems: 'center', 
              marginRight: 'auto' }}>
            <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
            </Typography>
            <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
              <Link to="/shop" style={{ color: 'inherit', textDecoration: 'none' }}>
                Shop
              </Link>
            </Typography>
            <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
              <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>
                Blog
              </Link>
            </Typography>
            <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
              <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                About
              </Link>
            </Typography>
            <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
              <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                Contact
              </Link>
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
            {
              isAuthenticated ? (
                (
                  <div>
                    <Avatar style={{
                      backgroundColor: 'rgb(245, 172, 107)',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      // color: 'black',
                    }} 
                    onClick={handleMenuOpen}>{userName.charAt(0)}</Avatar>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleMyAccount}>My Account</MenuItem>
                      {role === '1' && <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>}
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                )
              ) : (
              <Button variant="text" sx={{ textTransform: 'none', fontSize: '16px' }} onClick = {() => {navigate('/login')}}>
                Login
              </Button>)
            }
          </div>
  
          {/* Shopping Cart */}
          <IconButton color="inherit" onClick={handleCartToggle}>
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
          <Drawer anchor="right" open={isCartOpen} onClose={handleCartToggle} sx = {{zIndex: 1201}}>
            <div> 
              <Cart closeDrawer={closeDrawer} isOpenInDrawer = 'true'/>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
  );
}



// import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, InputAdornment, Button} from '@mui/material';
// import { Search } from '@mui/icons-material';
// import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
// import { useNavigate } from 'react-router-dom';
// import logo from '../../images/logo.jpg';
// import { shades } from '../../theme/theme';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { logout } from '../../store/loginSlice';

// export default function Header() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
//     console.log('isAuthenticated', isAuthenticated)

//     function handleLogout() {
//       dispatch(logout());
//       navigate('/');
//     }

//     return (
//         <AppBar position="fixed" sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(248, 248, 248)',  boxShadow: 'none', marginBottom: '10px' }}>
//           <Toolbar sx = {{width: "90%"}}>
//             {/* Logo */}
//             <img src={logo} alt="Logo" onClick = {() => navigate('/')} style={{ width: '150px', height: '70px', marginRight: '1rem', cursor: 'pointer' }} /> 
//             {/* Navigation */}
//             <div style={{ 
//                 display: 'flex',
//                 alignItems: 'center', 
//                 marginRight: 'auto' }}>
//               <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
//                 <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
//                   Home
//                 </Link>
//               </Typography>
//               <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
//                 <Link to="/shop" style={{ color: 'inherit', textDecoration: 'none' }}>
//                   Shop
//                 </Link>
//               </Typography>
//               <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
//                 <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>
//                   Blog
//                 </Link>
//               </Typography>
//               <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
//                 <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
//                   About
//                 </Link>
//               </Typography>
//               <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginLeft: '1rem', color: shades.primary[500], fontSize: '18px', fontWeight: 'bold'}}>
//                 <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
//                   Contact
//                 </Link>
//               </Typography>
//             </div>
    
//             {/* Search Bar */}
//             <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
//                 <InputBase placeholder="Search..." 
//                     startAdornment={
//                         <InputAdornment position="start">
//                             <Search style={{ marginRight: '1rem', color: 'orange'}} />
//                         </InputAdornment>
//                     }
//                     sx = {{
//                         border: '1px solid black',
//                         borderRadius: '50px',
//                         height: '30px',
                        
//                     }}
//                 />
//             </div>

//             {/* Login Button */}
//             <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
//               {
//                 isAuthenticated ? <Button variant="text" sx={{ textTransform: 'none', fontSize: '16px' }} onClick={handleLogout}>Logout</Button> : <Button variant="text" sx={{ textTransform: 'none', fontSize: '16px' }} onClick = {() => {navigate('/login')}}>
//                 Login
//               </Button>
//               }
//               {/* <Button variant="text" sx={{ textTransform: 'none', fontSize: '16px' }} onClick = {() => {navigate('/login')}}>
//                 Login
//               </Button>  */}
//             </div>
    
//             {/* Shopping Cart */}
//             <IconButton color="inherit">
//               <Badge badgeContent={17} color='default' sx={{
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center', 
//                 width: '40px', 
//                 height: '40px', 
//                 border: '1' || 'solid' || shades.secondary[500], 
//                 borderRadius: '50%', 
//                 backgroundColor: shades.secondary[500], 
//                 color: 'black'}} 
//                 invisible = {true}>
//                 <LocalMallRoundedIcon style={{ backgroundColor: shades.secondary[500], color: 'black' }} />
//               </Badge>
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       );
// }