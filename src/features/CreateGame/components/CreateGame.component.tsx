import { type FC } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useCreateGame } from "./useCreateGame.ts";
import { Controller } from "react-hook-form";

export const CreateGameComponent: FC = () => {
  const { onSubmit, control } = useCreateGame();

  return (
    <Box component={"form"} sx={{ width: "100%" }} onSubmit={onSubmit}>
      <Grid container spacing={2} flexDirection={"column"} flexGrow={"unset"}>
        <Grid item>
          <Controller
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                {...field}
                placeholder={"Your Name"}
                error={!!error}
              />
            )}
            name={"name"}
          />
        </Grid>
        <Grid item>
          <Button fullWidth variant={"contained"} type={"submit"}>
            Create Game
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
