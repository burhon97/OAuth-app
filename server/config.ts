export const Config = {
  port: Number(process.env.PORT) || 5005,
  google: {
    get clientId() {
      if (!process.env.GOOGLE_CLIENT_ID) {
        throw new Error("Environment variable [GOOGLE_CLIENT_ID] is required.");
      }
      return process.env.GOOGLE_CLIENT_ID;
    },

    get clientSecret() {
      if (!process.env.GOOGLE_CLIENT_SECRET) {
        throw new Error(
          "Environment variable [GOOGLE_CLIENT_SECRET] is required."
        );
      }
      return process.env.GOOGLE_CLIENT_SECRET;
    },
  },

  github: {
    get clientId() {
      if (!process.env.GITHUB_CLIENT_ID) {
        throw new Error("Environment variable [GITHUB_CLIENT_ID] is required.");
      }
      return process.env.GITHUB_CLIENT_ID;
    },

    get clientSecret() {
      if (!process.env.GITHUB_CLIENT_SECRET) {
        throw new Error(
          "Environment variable [GITHUB_CLIENT_SECRET] is required."
        );
      }
      return process.env.GITHUB_CLIENT_SECRET;
    },
  },
};
