export class EnvConfig {
  private static envConfigMap = {
    firebaseApiKey: "VITE_FIREBASE_API_KEY",
    firebaseAuthDomain: "VITE_FIREBASE_AUTH_DOMAIN",
    firebaseProjectId: "VITE_FIREBASE_PROJECT_ID",
    firebaseStorageBucket: "VITE_FIREBASE_STORAGE_BUCKET",
    firebaseMessagingSenderId: "VITE_FIREBASE_MESSAGING_SENDER_ID",
    firebaseAppId: "VITE_FIREBASE_APP_ID",
  };

  static get firebaseApiKey() {
    const firebaseApiKey = import.meta.env[this.envConfigMap.firebaseApiKey];
    this.validateEnv("firebaseApiKey", firebaseApiKey);

    return firebaseApiKey;
  }

  static get firebaseAuthDomain() {
    const firebaseAuthDomain = import.meta.env[
      this.envConfigMap.firebaseAuthDomain
    ];
    this.validateEnv("firebaseAuthDomain", firebaseAuthDomain);

    return firebaseAuthDomain;
  }

  static get firebaseProjectId() {
    const firebaseProjectId = import.meta.env[
      this.envConfigMap.firebaseProjectId
    ];
    this.validateEnv("firebaseProjectId", firebaseProjectId);

    return firebaseProjectId;
  }

  static get firebaseStorageBucket() {
    const firebaseStorageBucket = import.meta.env[
      this.envConfigMap.firebaseStorageBucket
    ];
    this.validateEnv("firebaseStorageBucket", firebaseStorageBucket);

    return firebaseStorageBucket;
  }

  static get firebaseMessagingSenderId() {
    const firebaseMessagingSenderId = import.meta.env[
      this.envConfigMap.firebaseMessagingSenderId
    ];
    this.validateEnv("firebaseMessagingSenderId", firebaseMessagingSenderId);

    return firebaseMessagingSenderId;
  }

  static get firebaseAppId() {
    const firebaseAppId = import.meta.env[this.envConfigMap.firebaseAppId];
    this.validateEnv("firebaseAppId", firebaseAppId);

    return firebaseAppId;
  }

  private static validateEnv(
    key: keyof typeof this.envConfigMap,
    value?: string,
  ) {
    if (!value) {
      console.error("Missing environment variable: ", key);
    }
  }
}
