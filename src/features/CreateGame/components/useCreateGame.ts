import { useForm } from "react-hook-form";
import { useStore } from "../../../stores/store.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateGameSchema } from "../schema/CreateGame.schema.ts";

export const useCreateGame = () => {
  const { name } = useStore();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name,
    },
    resolver: zodResolver(CreateGameSchema),
  });

  const onSubmit = handleSubmit((data, event) => {
    console.log(data, event);
  });

  return { control, onSubmit };
};
