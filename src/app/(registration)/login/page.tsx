"use client";
import Logo from "@/_components/shared/logo/Logo";
import useLogin from "@/hooks/useLogin";
import { loginValidationSchema } from "@/lib/validation-schema/auth/auth.validation.schema";
import AuthForm from "../_components/authForm/AuthForm";
const defaultValues = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const { handleLogin, loading } = useLogin();

  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo Header */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        {/* Auth Card */}
        <AuthForm
          title={"Well Come Back"}
          subtitle={"Sign in to your account to continue creating"}
          isSingUp={false}
          defaultValues={defaultValues}
          onSubmit={handleLogin}
          loading={loading}
          validationSchema={loginValidationSchema}
        />
      </div>
    </div>
  );
}
