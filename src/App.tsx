import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DarkTheme } from "./themes/dark.theme.ts";

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
