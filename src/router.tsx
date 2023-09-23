import { createBrowserRouter } from "react-router-dom";
import { CreateGamePage } from "./features/CreateGame/pages/CreateGame.page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CreateGamePage,
  },
]);
