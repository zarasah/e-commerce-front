import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, ListItemButton } from '@mui/material';
import { AccountCircle, Category, ShoppingCart, ShoppingBasket, TableChart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const styles = {
  root: {
    // margin: '200px',
    display: 'flex',
  },
  appBar: {
    // zIndex: 1201, // Increase z-index to prevent overlapping with Chat Widget
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    marginTop: '50px',
    overflow: 'auto',
    marginLeft: '20px'
  },
  content: {
    flexGrow: 1,
    padding: '20px',
  },
};

const Dashboard = () => {
  const navigate = useNavigate();

  function handleUsersClick() {
    navigate('/admin/dashboard/userstable');
  }

  function handleCategoriesClick() {
    navigate('/admin/dashboard/categoriestable');
  }

  function handleProductsClick() {
    navigate('/admin/dashboard/productstable');
  }

  return (
    <div style={styles.root}>
      <Drawer
        style={styles.drawer}
        variant="permanent"
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <Toolbar />
        <div style={styles.drawerContainer}>
        <Typography variant="h6" style={{fontWeight: '600'}} noWrap>
            Dashboard
          </Typography>
          <List>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgb(245, 172, 107)' }}>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Users" onClick = {handleUsersClick}/>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgb(245, 172, 107)' }}>
                <Category />
              </ListItemIcon>
              <ListItemText primary="Categories" onClick = {handleCategoriesClick} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgb(245, 172, 107)' }}>
                <TableChart />
              </ListItemIcon>
              <ListItemText primary="Products"  onClick = {handleProductsClick} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgb(245, 172, 107)' }}>
                <ShoppingBasket />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgb(245, 172, 107)' }}>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Carts" />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Dashboard;

// import React from 'react';
// import { AppBar, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
// import { AccountCircle, TableChart } from '@mui/icons-material';

// const drawerWidth = 240;

// const styles = {
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: 1201, // Increase z-index to prevent overlapping with Chat Widget
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerContainer: {
//     overflow: 'auto',
//   },
//   content: {
//     flexGrow: 1,
//     padding: '20px',
//   },
// };

// const Dashboard = () => {
//   return (
//     <div style={styles.root}>
//       <CssBaseline />
//       <AppBar position="fixed" style={styles.appBar}>
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         style={styles.drawer}
//         variant="permanent"
//         classes={{
//           paper: styles.drawerPaper,
//         }}
//       >
//         <Toolbar />
//         <div style={styles.drawerContainer}>
//           <List>
//             <ListItem button>
//               <ListItemIcon>
//                 <AccountCircle />
//               </ListItemIcon>
//               <ListItemText primary="Users" />
//             </ListItem>
//             <ListItem button>
//               <ListItemIcon>
//                 <TableChart />
//               </ListItemIcon>
//               <ListItemText primary="Tables" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>
//       <main style={styles.content}>
//         <Toolbar />
//         <Typography variant="h4" gutterBottom>
//           Welcome to the Admin Dashboard!
//         </Typography>
//         {/* Your content goes here */}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// import { Link } from "react-router-dom";
// import ProductsList from '../components/ProductsList';

// export default function Dashboard() {
//     return (
//         <div style={{marginTop: "200px"}}>
//             <Link to = '/'>Go Home</Link>
//         </div>
//     )
// }