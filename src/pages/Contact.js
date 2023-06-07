import { Typography, Container, TextField, Button } from "@mui/material";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const containerStyle = {
    backgroundColor: 'rgb(248, 248, 248)',
    borderRadius: '10%',
    width: '50%',
    padding: '2rem',
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" color='rgb(241, 158, 86)' gutterBottom>Let's Get in Touch</Typography>
        <Typography variant="body1" gutterBottom>
            <em>We would love to hear from you! Fill out the form below to get in touch with us.</em>
        </Typography>
        <div style={containerStyle}>
        <Typography variant="h3" component="h1" gutterBottom>Contact Us</Typography>
        <form onSubmit={handleSubmit}>
            <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            />
            <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            type="email"
            />
            <TextField
            label="Message"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={4}
            required
            />
            <Button type="submit" variant="contained" color="secondary" sx={{color: 'white', '&:hover': {background: 'rgb(241, 158, 86)'}}}>
                Submit
            </Button>
        </form>
        </div>
    </Container>
  );
};

export default Contact;