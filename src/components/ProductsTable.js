import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Modal, Container, TextField, Button, Pagination } from '@mui/material';
import {  MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest, createProductRequest, updateProductRequest, deleteProductRequest } from '../store/productSlice';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const containerStyle = {
  backgroundColor: 'rgb(248, 248, 248)',
  borderRadius: '5%',
  width: '50%',
  padding: '2rem',
};

const CategoriesTable = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [rowData, setRowData] = useState('') 
    const data = useSelector((state) => state.product.products);
    const error = useSelector((state) => state.product.error);
    const options = useSelector((state) => state.category.categories);
    const fieldsForForm = !data.length ? ['name', 'price', 'quantity', 'description','image', 'Category'] : Object.keys(data[0]).filter((item) => (item !== 'id' && item !== 'createdAt' && item !== 'updatedAt' && item !== 'CategoryId'))
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
      mode: 'onChange'
  });
  
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const formData = new FormData();
  const [page, setPage] = useState(1);
  const count = Math.ceil(data.length / 6);
  const startIndex = (page - 1) * 6;
  const endIndex = startIndex + 6;
  const displayedItems = data.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchProductsRequest());
}, [dispatch])

  const handleTextFieldClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file ? file.name : '');
    setSelectedFile(file)
  };

  function isURL(value) {
    const urlPattern = /^http:\/\/localhost:4001\/uploads\//;;
    return urlPattern.test(value);
  }

  const onSubmit = (data) => {
    if (selectedFile) {
      data.img = selectedFile;
    }
    
      for (const field in data) {

        if (field === 'Category') {
          formData.append('categoryId', data[field])
        } else {
          formData.append(field, data[field]);
        }
      }
    if (rowData) {
      const newData = {
        id: rowData.id,
        data: formData
      }
      dispatch(updateProductRequest(newData));
    } else {
      dispatch(createProductRequest(formData));
    }
    handleCloseModal();
    setPage(count)
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedFileName('');
    setRowData('');
    reset();
  };

  function handleDelete(id) {
    dispatch(deleteProductRequest(id));
  }

  function handleEdit(id) {
    const dataForEdit = data.filter((item) => item.id === id);
    const oldData = dataForEdit[0];
    setRowData(oldData);
    setIsEditModalOpen(true);
  }

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
      window.scrollTo(0, 0);
  };
  
  return (
    <div style = {{paddingTop: '100px', width: '80%'}}>
      <Button variant="contained" onClick={handleOpenModal} style={{ marginBottom: '20px', textTransform: 'capitalize', backgroundColor: 'rgb(245, 172, 107)', color: "black", fontWeight: '600' }}>
        Add New Product
      </Button>
      {data.length !== 0 && <TableContainer component={Paper}>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell sx={{ textAlign: 'center', backgroundColor: 'rgb(245, 172, 107)' }} colSpan={Object.keys(data[0]).length + 2}>
                <Typography variant="h6" style={{fontWeight: '600'}}>Products Table</Typography>
                </TableCell>
            </TableRow>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell key={key} sx={{ fontSize: '16px', fontWeight: '600', textAlign: 'center' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
            ))}
            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>Edit</TableCell>
            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedItems.map((product) => (
            <TableRow key={product.id}>
              {Object.values(product).map((value) => {
                if (value?.name) {
                  return <TableCell key={uuidv4()}>{value.name}</TableCell>
                }
                const isValueURL = isURL(value);

                if (isValueURL) {
                  return( 
                  <TableCell key={uuidv4()}>
                    <img alt='img' src={value} style={{ width: '70px', height: '90px' }}/>
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
    </TableContainer>}
    <div>
      {
        data.length > 6 && (
            <div className='pagination'>
                <Pagination
                    component="div"
                    count={count}
                    page={page}
                    color="secondary"
                    onChange={handleChangePage}
                />
            </div>
        )
      }
    </div>

    <Modal open={isModalOpen} onClose={handleCloseModal}>
    <Container maxWidth="md" 
    style={{
      position: 'fixed',
      top: '50%',
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
                      defaultValue=''
                      // value={rowData ? rowData.CategoryId : ''}
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

      <Modal open={isEditModalOpen} onClose={handleCloseModal}>
      <Container maxWidth="md" 
    style={{
      position: 'fixed',
      top: '50%',
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
                    value={rowData.image || selectedFileName}
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
                      defaultValue={rowData.CategoryId}
                      // value={rowData ? rowData.CategoryId : ''}
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
                    defaultValue={rowData[item]}
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
                    defaultValue={rowData[item]}
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