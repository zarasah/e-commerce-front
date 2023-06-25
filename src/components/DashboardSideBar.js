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