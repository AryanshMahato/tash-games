import { createBrowserRouter } from "react-router-dom";
import { CreateGamePage } from "./features/CreateGame/pages/CreateGame.page.tsx";
import { GamePage } from "./features/Game/pages/Game.page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CreateGamePage,
  },
  {
    path: "/game/:gameId",
    Component: GamePage,
  },
]);
