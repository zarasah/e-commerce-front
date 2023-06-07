import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ categories }) => {
  return (
    <div>
      <Typography variant="h6" style={{fontWeight: '600'}}>Categories</Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} >
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;