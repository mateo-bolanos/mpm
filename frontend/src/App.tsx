import { Box } from "@mui/material";
import AppRouter from "./router";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Box component="main" sx={{ p: 3 }}>
        <AppRouter />
      </Box>
    </Layout>
  );
}

export default App;
