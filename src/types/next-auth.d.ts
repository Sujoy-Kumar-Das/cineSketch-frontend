import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    _id: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    _id: string;
    name: string;
    email: string;
    picture: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }
}
