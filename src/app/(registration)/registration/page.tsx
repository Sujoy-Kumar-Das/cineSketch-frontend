/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Logo from "@/_components/shared/logo/Logo";
import useRegisterUser from "@/hooks/useRegisterUser";
import { registrationValidationSchema } from "@/lib/validation-schema/auth/auth.validation.schema";
import AuthForm from "../_components/authForm/AuthForm";

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationPage() {
  const { handleRegisterUser, loading } = useRegisterUser();
  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo Header */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        {/* Auth Card */}
        <AuthForm
          title={"Create your account"}
          subtitle={"Start creating amazing AI art today"}
          isSingUp={true}
          defaultValues={defaultValues}
          onSubmit={handleRegisterUser}
          validationSchema={registrationValidationSchema}
          loading={loading}
        />
      </div>
    </div>
  );
}
