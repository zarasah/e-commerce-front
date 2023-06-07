import { Typography, Container, Grid, Card, CardContent } from "@mui/material";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.',
      author: 'John Doe',
      date: 'June 1, 2023',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post.',
      author: 'Jane Smith',
      date: 'June 3, 2023',
    },
    // Add more blog posts as needed
  ];

  return (
    <Container maxWidth="md" style={{ marginTop: '5rem' }}>
      <Typography variant="h1" component="h1"  color='rgb(245, 172, 107)' gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={2}>
        {blogPosts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  By {post.author} | {post.date}
                </Typography>
                <Typography variant="body1">{post.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;