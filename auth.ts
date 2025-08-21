/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAccessToken,
  login,
  syncLogin,
} from "@/service/actions/auth.service";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const signInProviders = ["google"];
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    // Email/password login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        const res = await login(
          String(credentials.email),
          String(credentials.password)
        );

        if (!res.user) {
          return null;
        }

        return {
          _id: res.user._id,
          name: res.user.name,
          email: res.user.email,
          image: res.user.image,
          role: res.user.role,
          plan: res.user.plan,
          accessToken: res.accessToken,
          accessTokenExpiresIn: res.expiresIn,
          refreshToken: res.refreshToken,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }) {
      const isSignInProviderExists = signInProviders.includes(
        account?.provider as string
      );

      if (isSignInProviderExists) {
        try {
          const syncLoginRes = await syncLogin(
            user.email as string,
            user.name as string,
            account?.provider as string
          );

          if (!syncLoginRes.user) {
            return false;
          }

          user._id = syncLoginRes.user._id;
          user.name = syncLoginRes.user.name;
          user.email = syncLoginRes.user.email;
          user.image = syncLoginRes.user.image || undefined;
          user.role = syncLoginRes.user.role;
          user.plan = syncLoginRes.user.plan;
          user.accessToken = syncLoginRes.accessToken;
          user.refreshToken = syncLoginRes.refreshToken;
          user.accessTokenExpiresIn = syncLoginRes.expiresIn;
        } catch {
          return false;
        }
      }

      return true;
    },

    async jwt({ token, user, account }) {
      if (user && account) {
        return {
          ...token,
          _id: user._id,
          plan: user.plan,
          role: user.role,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          accessTokenExpires: user.accessTokenExpiresIn,
        };
      }

      // get new access token via refresh token;
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      return getAccessToken(token);
    },

    async session({ session, token }) {
      if (token) {
        session.user._id = token._id as string;
        session.user.image = token.picture as string | undefined;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.plan = token.plan;
        session.user.accessToken = token.accessToken;
        session.user.accessTokenExpiresIn = token.accessTokenExpires;
      }

      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
});
