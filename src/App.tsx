import { RestoreOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { PersistentDrawerLeft } from "./components/Nav";

/**
 *
 * @param display React component to be displayed in the main viewbox
 * @returns React component in context of App.tsx with styling of choice
 */
const mainBuilder = (display: React.ReactNode) => {
  return (
    <Box sx={{ flex: 1 }}>
      {display}
      <BottomNavigation value={""} onChange={() => {}} sx={{ margin: "1em" }}>
        <BottomNavigationAction label="Tourney" icon={<RestoreOutlined />} />
      </BottomNavigation>
    </Box>
  );
};

let main: React.ReactElement;

function checkLogin(loggedIn: boolean, loginComp: React.ReactElement) {
  if (!loggedIn) {
    main = mainBuilder(loginComp);
  } else {
    main = (
      <Typography variant="h1" color="initial">
        Hello somehow!
      </Typography>
    );
  }
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = Login(setLoggedIn);
  const nav = PersistentDrawerLeft(main);

  checkLogin(loggedIn, login);
  ``;

  return <div className="App">{nav}</div>;
}

export default App;
