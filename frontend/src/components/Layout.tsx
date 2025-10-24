import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import { PropsWithChildren, useState } from "react";

function Layout({ children }: PropsWithChildren) {
  const [menuClicks, setMenuClicks] = useState(0);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
            aria-label="open navigation"
            onClick={() => setMenuClicks((count) => count + 1)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Corrugation & Packaging PM
          </Typography>
          <Typography variant="caption" component="div">
            Menu clicks: {menuClicks}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
