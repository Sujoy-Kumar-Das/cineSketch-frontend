/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axios from "axios";
import { FieldValues } from "react-hook-form";

export const createUser = async (payload: FieldValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to create user");
  }

  return data;
};

export const login = async (email: string, password: string) => {
  const res = await axios.post(
    `${process.env.BACKEND_URL}/auth/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  return res.data.data;
};

export const syncLogin = async (
  email: string,
  name: string,
  provider: string
) => {
  const res = await axios.post(
    `${process.env.BACKEND_URL}/auth/sync-login`,
    {
      email,
      name,
      provider,
    },
    { withCredentials: true }
  );

  return res.data.data;
};

export const getAccessToken = async (token: any) => {
  try {
    const res = await axios.post(
      `${process.env.BACKEND_URL}/auth/refresh-token`,
      { token: token.refreshToken },
      {
        withCredentials: true,
      }
    );

    if (!res.data.success) {
      return {
        ...token,
        error: "RefreshAccessTokenError",
      };
    }

    return {
      ...token,
      accessToken: res.data.data.accessToken,
      accessTokenExpires: res.data.data.expiresIn,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};
