import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Modal, Container, TextField, Button, TablePagination } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText  } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest, createProductRequest, deleteProductRequest } from '../store/productSlice';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const CategoriesTable = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const data = useSelector((state) => state.product.products);
    const options = useSelector((state) => state.category.categories);
    const fieldsForForm = Object.keys(data[0]).filter((item) => (item !== 'id' && item !== 'createdAt' && item !== 'updatedAt' && item !== 'CategoryId'))
    console.log('options',options)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
      mode: 'onChange'
  });

  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState({});
  const formData = new FormData();
  const handleTextFieldClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file ? file.name : '');
    setSelectedFile(file)
    // Handle the uploaded file here
    // console.log(file);
  };

  function isURL(value) {
    const urlPattern = /^http:\/\/localhost:4001\/uploads\//;;
    return urlPattern.test(value);
  }

  const containerStyle = {
    backgroundColor: 'rgb(248, 248, 248)',
    borderRadius: '5%',
    width: '50%',
    padding: '2rem',
  };

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch])

    const onSubmit = (data) => {
      data.img = selectedFile;
      for (const field in data) {
        if (field === 'Category') {
          formData.append('categoryId', data[field])
        } else {
          formData.append(field, data[field]);
        }
      }
      console.log('FORM', [...formData.entries()])
      dispatch(createProductRequest(formData));
      handleCloseModal();
    };

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      reset();
      setIsModalOpen(false);
      setSelectedFileName('')
    };

    function handleDelete(id) {
      dispatch(deleteProductRequest(id));
    }

    function handleEdit(id) {
      
      handleOpenModal();
    }

  return (
    <div style = {{paddingTop: '100px', width: '80%'}}>
      <Button variant="contained" onClick={handleOpenModal} style={{ marginBottom: '20px', textTransform: 'capitalize', backgroundColor: 'rgb(245, 172, 107)', color: "black", fontWeight: '600' }}>
        Add New Product
      </Button>
        <TableContainer component={Paper}>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell sx={{ textAlign: 'center', backgroundColor: 'rgb(245, 172, 107)' }} colSpan={Object.keys(data[0]).length + 2}>
                <Typography variant="h6" style={{fontWeight: '600'}}>Products Table</Typography>
                </TableCell>
            </TableRow>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell key={key} sx={{ fontSize: '16px', fontWeight: '600' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
            ))}
            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>Edit</TableCell>
            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              {Object.values(product).map((value) => {
                if (value?.name) {
                  return <TableCell key={uuidv4()}>{value.name}</TableCell>
                }
                const isValueURL = isURL(value);
                console.log('isValueURL', isValueURL)
                if (isValueURL) {
                  console.log('from IMGAE')
                  return( 
                  <TableCell key={uuidv4()}>
                    <img alt='img' src={value} style={{ width: '50px', height: '50px' }}/>
                  </TableCell>
                )}
                return <TableCell key={uuidv4()}>{value}</TableCell>
              }
              )}
              <TableCell style={{ width: '50px' }}>
                <IconButton aria-label="edit" onClick={() => {handleEdit(product.id)}}>
                  <EditIcon sx={{ color: 'rgb(245, 172, 107)' }} />
                </IconButton>
              </TableCell>
              <TableCell style={{ width: '50px' }}>
                <IconButton aria-label="delete" onClick={() => {handleDelete(product.id)}}>
                  <DeleteIcon sx={{ color: 'rgb(245, 172, 107)' }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Modal open={isModalOpen} onClose={handleCloseModal}>
    <Container maxWidth="md" 
    style={{
      position: 'fixed',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      outline: 'none',
    }}
    >
        <div style={containerStyle}>
        <Typography variant="h3" component="h1" gutterBottom>Add New Product</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {
            fieldsForForm.map((item) => {
              if (item === 'image') {
                return (
                  <>
                  <TextField 
                    // type='file'
                    key = {item}
                    name = {item}
                    label={item.charAt(0).toUpperCase() + item.slice(1)}
                    // defaultValue=""
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={selectedFileName}
                    onClick={handleTextFieldClick}
                    InputProps={{
                      readOnly: true,
                    }}
                    {...register('image', { required: true })} 
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    // {...register('image', { required: true })} 
                    onChange={handleFileInputChange}
                  />
                  </>
                )
              } else if (item === 'Category') {
                return (
                  <TextField
                      select
                      label={item}
                      defaultValue=""
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      {...register(`${item}`, { required: true })}
                      // error={Boolean(errors[`${item}`])}
                      // helperText={errors[`${item}`] ? `${item} is required` : ''}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )
              } else if (item === 'price' || item === 'quantity'){
                return (
                  <TextField
                    key = {item}
                    name = {item}
                    label={item.charAt(0).toUpperCase() + item.slice(1)}
                    type="number"
                    variant="outlined"
                    margin="normal"
                    defaultValue=''
                    fullWidth
                    required
                    {...register(`${item}`, { required: true })}
                    error={Boolean(errors[`${item}`])}
                    helperText={errors[`${item}`] ? `${item} is required` : ''}
                  />
                )
              } else {
                return (
                  <TextField
                    key = {item}
                    name = {item}
                    label={item.charAt(0).toUpperCase() + item.slice(1)}
                    variant="outlined"
                    margin="normal"
                    defaultValue=''
                    fullWidth
                    required
                    {...register(`${item}`, { required: true })}
                    error={Boolean(errors[`${item}`])}
                    helperText={errors[`${item}`] ? `${item} is required` : ''}
                  />
                )
              }
            })
          }
            
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button type="submit" variant="contained" color="secondary" sx={{color: 'white', '&:hover': {background: 'rgb(241, 158, 86)'}}}>
                  Submit
              </Button>
              <Button variant="contained" color="secondary" sx={{color: 'white', '&:hover': {background: 'rgb(241, 158, 86)'}}} onClick={handleCloseModal}>
                  Close
              </Button>
            </div>
        </form>
        </div>
    </Container>
      </Modal> 

    </div>
  );
};

export default CategoriesTable;