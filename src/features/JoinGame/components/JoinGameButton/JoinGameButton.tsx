import { type FC } from "react";
import { Button } from "@mui/material";
import { useStore } from "../../../../stores/store.ts";

export const JoinGameButton: FC = () => {
  const name = useStore((state) => state.name);

  return (
    <>
      <Button
        fullWidth
        variant={"contained"}
        onClick={() => console.log({ name })}
      >
        Join Game
      </Button>
    </>
  );
};
