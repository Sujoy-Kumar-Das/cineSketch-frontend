"use server";

import { cookies } from "next/headers";

export const setCookie = (key: string, value: string, expires: number) => {
  cookies().set(key, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: (expires * 1000 - Date.now()) / 1000,
    path: "/",
  });
};
