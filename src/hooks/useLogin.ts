/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function useLogin() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: FieldValues) => {
    try {
      setLoading(true);

      const { email, password } = values;

      const result: any = await signIn("credentials", {
        email,
        password,
        redirect: true,
        redirectTo: "/",
      });

      if (result?.error) {
        toast.error("Invalid User Email or Password.");
      } else {
        toast.success("Login Successful");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
}
