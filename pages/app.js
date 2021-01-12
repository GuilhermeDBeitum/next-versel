import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
// import CenteredTabs from "../components/Nav";
// import Accordeon from "../components/Accordion"
// import Step from "../components/Step"
// import Album from "../components/Album"
import Dashboard from "../components/Dashboard"

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
          <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
