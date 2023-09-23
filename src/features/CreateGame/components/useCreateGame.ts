import { useForm } from "react-hook-form";
import { useStore } from "../../../stores/store.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateGameSchema } from "../schema/CreateGame.schema.ts";
import { useEffect } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getApp } from "firebase/app";

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

  const onSubmit = handleSubmit(async (data) => {
    const gamesRef = collection(getFirestore(getApp()), "games");

    await addDoc(gamesRef, {
      id: "123",
      creator: data.name,
    });
  });

  return { control, onSubmit };
};
