import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useDispatch} from 'react-redux';
import { fetchProductsByCategoryRequest, fetchProductsRequest } from '../store/productSlice';

const Sidebar = ({ categories }) => {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(fetchProductsByCategoryRequest(id));
  }

  function handleAllProductsClick() {
    dispatch(fetchProductsRequest());
  }

  return (
    <div>
      <Typography variant="h6" style={{fontWeight: '600'}}>Categories</Typography>
      <List>
      <ListItem onClick={handleAllProductsClick}>
            <ListItemText primary='All Products'/>
          </ListItem>
        {categories.map((category) => (
          <ListItem key={category.id} onClick={() => handleClick(category.id)}>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;