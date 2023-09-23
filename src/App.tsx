import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DarkTheme } from "./themes/dark.theme.ts";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/firebase.config.ts";

function App() {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

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
