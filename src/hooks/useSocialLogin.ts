"use client";
import { signIn } from "next-auth/react";

export default function useSocialLogin(provider: string) {
  const handleSocialLogin = async () => {
    await signIn(provider, { redirect: true, redirectTo: "/" });
  };

  return { handleSocialLogin };
}
