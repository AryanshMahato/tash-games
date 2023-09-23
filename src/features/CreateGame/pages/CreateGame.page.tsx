import { type FC } from "react";
import { CreateGameComponent } from "../components/CreateGame.component.tsx";
import { styled } from "@mui/material";

export const CreateGamePage: FC = () => {
  return (
    <CreateGameWrapper>
      <CreateGameComponent />
    </CreateGameWrapper>
  );
};

const CreateGameWrapper = styled("div")`
  display: flex;
  max-width: 90%;
  width: 450px;
  margin: 20vh auto auto;
`;
