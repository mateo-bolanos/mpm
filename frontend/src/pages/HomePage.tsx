import { Card, CardContent, Typography } from "@mui/material";

function HomePage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom>
          Corrugation & Packaging Project Manager
        </Typography>
        <Typography variant="body1">
          Welcome to the project management workspace. Use the navigation menu to
          access project intake, swimlanes, sample making, and analytics tools as
          they become available.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HomePage;
