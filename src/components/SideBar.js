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
      <ListItem onClick={handleAllProductsClick}>
            <ListItemText primary='All Products'/>
          </ListItem>
        {categories.map((category) => (
          <ListItem key={category.id} onClick={() => handleClick(category.name)}>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;