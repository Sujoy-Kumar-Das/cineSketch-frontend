/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createUser } from "@/service/actions/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function useRegisterUser() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegisterUser = async (values: FieldValues) => {
    try {
      setLoading(true);

      const res = await createUser(values);

      if (res.success) {
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { handleRegisterUser, loading };
}
