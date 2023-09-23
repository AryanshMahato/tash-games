import { type FC } from "react";
import { useParams } from "react-router-dom";

export const GamePage: FC = () => {
  const { gameId } = useParams();
  return <>Playing {gameId}</>;
};
