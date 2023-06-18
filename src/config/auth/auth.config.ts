import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
  secret: "secret",
  providers: [
    GoogleProvider({
      clientId:
        "905168903366-b2ttk44aj2aqg084hhb3ue29r6diku8e.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      return true;
    },
  },
};
