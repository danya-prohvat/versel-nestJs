import { authConfig } from "@/config/auth/auth.config";
import NextAuth from "next-auth/next";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
