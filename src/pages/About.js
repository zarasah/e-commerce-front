import { Typography, Container, Grid } from "@mui/material";
import about from '../images/about.jpg';

function About() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // backgroundColor: '#f3f3f3',
      };
    
      const headingStyle = {
        // fontSize: '2rem',
        color: 'rgb(245, 172, 107)',
        textAlign: 'left',
        marginBottom: '1.5rem',
      };
    
      const textStyle = {
        fontSize: '1rem',
        color: '#333',
        textAlign: 'left',
        marginBottom: '1.5rem',
      };

      return (
        <div style={containerStyle}>
          <Container maxWidth="md" style={{ marginTop: '5rem' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h1" style={headingStyle} gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body1" style={textStyle} gutterBottom>
                  Welcome to our e-commerce platform! We strive to provide the best online shopping experience for our customers.
                  Our platform offers a wide range of products to choose from, ensuring that you find exactly what you're looking for.
                </Typography>
                <Typography variant="body1" style={textStyle} gutterBottom>
                  At our core, we value customer satisfaction and aim to deliver exceptional service. Our dedicated team works tirelessly
                  to ensure that your shopping journey is smooth, secure, and enjoyable.
                </Typography>
                <Typography variant="body1" style={textStyle}>
                  Whether you're a new customer or a returning one, we thank you for choosing our platform. Happy shopping!
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img src={about} alt="About Us" style={{ width: '100%', height: 'auto' }} />
              </Grid>
            </Grid>
          </Container>
        </div>
      );
//   return (
//     <Container maxWidth="md" style={{ marginTop: '5rem' }}>
//       <Typography variant="h1" component="h1" color='rgb(245, 172, 107)' gutterBottom>About Us</Typography>
//       <img src={about} alt="About Us" style={{ marginBottom: '1.5rem', maxWidth: '100%' }} />
//       <Typography variant="body1" gutterBottom>
//         Welcome to our e-commerce platform! We strive to provide the best online shopping experience for our customers.
//         Our platform offers a wide range of products to choose from, ensuring that you find exactly what you're looking for.
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         At our core, we value customer satisfaction and aim to deliver exceptional service. Our dedicated team works tirelessly
//         to ensure that your shopping journey is smooth, secure, and enjoyable.
//       </Typography>
//       <Typography variant="body1">
//         Whether you're a new customer or a returning one, we thank you for choosing our platform. Happy shopping!
//       </Typography>
//     </Container>
//   );
};

export default About;