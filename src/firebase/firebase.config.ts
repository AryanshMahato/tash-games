import { EnvConfig } from "../config/EnvConfig.ts";

export const firebaseConfig = {
  apiKey: EnvConfig.firebaseApiKey,
  authDomain: EnvConfig.firebaseAuthDomain,
  projectId: EnvConfig.firebaseProjectId,
  storageBucket: EnvConfig.firebaseStorageBucket,
  messagingSenderId: EnvConfig.firebaseMessagingSenderId,
  appId: EnvConfig.firebaseAppId,
};
