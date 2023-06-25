import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ categories }) => {
  const navigate = useNavigate();

  function handleClick(name) {
    navigate(`/shop?category=${name}`);
  }

  function handleAllProductsClick() {
    navigate('/shop');
  }

  return (
    <div>
      <Typography variant="h6" style={{fontWeight: '600'}}>Categories</Typography>
      <List>
      <ListItem onClick={handleAllProductsClick} sx={{ cursor: 'pointer', padding: '0 20px', borderRadius: '50px', '&:hover': { backgroundColor: 'rgb(245, 172, 107)'} }}>
            <ListItemText primary='All Products'/>
          </ListItem>
        {categories.map((category) => (
          <ListItem key={category.id} onClick={() => handleClick(category.name)} sx={{ cursor: 'pointer', padding: '0 20px', borderRadius: '50px', '&:hover': { backgroundColor: 'rgb(245, 172, 107)'} }}>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;