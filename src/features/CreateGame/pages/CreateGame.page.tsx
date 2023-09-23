import { type FC } from "react";
import { CreateGameComponent } from "../components/CreateGame.component.tsx";
import { Chip, Divider, styled } from "@mui/material";
import { JoinGameButton } from "../../JoinGame/components/JoinGameButton/JoinGameButton.tsx";

export const CreateGamePage: FC = () => {
  return (
    <CreateGameWrapper>
      <CreateGameComponent />
      <Divider>
        <Chip label={"OR"} />
      </Divider>
      <JoinGameButton />
    </CreateGameWrapper>
  );
};

const CreateGameWrapper = styled("div")`
  display: flex;
  flex-flow: column;
  gap: 16px;
  max-width: 90%;
  width: 450px;
  margin: 20vh auto auto;
`;
