import { useForm } from "react-hook-form";
import { useStore } from "../../../stores/store.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateGameSchema } from "../schema/CreateGame.schema.ts";
import { useEffect } from "react";

export const useCreateGame = () => {
  const { name, setName } = useStore();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name,
    },
    resolver: zodResolver(CreateGameSchema),
  });

  useEffect(() => {
    const subscription = watch((data) => {
      setName(data.name || name);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [name, setName, watch]);

  const onSubmit = handleSubmit((data, event) => {
    console.log(data, event);
  });

  return { control, onSubmit };
};
