"use client";
import Form from "@/_components/shared/form/Form";
import Input from "@/_components/shared/form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { FaLock, FaUser, FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { ZodObject } from "zod";
import GoogleLoginButton from "../google-login/GoogleLoginButton";

interface AuthFormProps {
  title: string;
  subtitle: string;
  isSingUp: boolean;
  onSubmit: (values: FieldValues) => Promise<void>;
  validationSchema: ZodObject;
  defaultValues: object;
  loading: boolean;
}

export default function AuthForm({
  title,
  subtitle,
  isSingUp,
  onSubmit,
  validationSchema,
  defaultValues,
  loading
}: AuthFormProps) {
  return (
    <div className="auth-card border border-zinc-700/50 rounded-2xl p-8 shadow-xl">
      <h1 className="text-2xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-zinc-400 text-center mb-8">{subtitle}</p>

      {/* Social Login */}
      <GoogleLoginButton />

      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-zinc-700/50" />
        <span className="px-4 text-sm text-zinc-500">or</span>
        <div className="flex-1 h-px bg-zinc-700/50" />
      </div>

      {/* Login Form */}
      <Form
        className="space-y-5"
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        resolver={zodResolver(validationSchema)}
      >
        {isSingUp && (
          <Input
            name="name"
            type="text"
            label="Full Name"
            size="medium"
            icon={<FaUser />}
            placeholder="John Doe"
          />
        )}

        <Input
          name="email"
          type="email"
          label="Email Address"
          size="medium"
          icon={<MdEmail />}
          placeholder="youremail@gmail.com"
        />
        <Input
          name="password"
          type="password"
          label="Password"
          size="medium"
          icon={<FaLock />}
          placeholder="••••••••"
        />

        {!isSingUp && (
          <div className="flex justify-end mt-1">
            <Link
              href="/forgot-password"
              className="text-sm text-indigo-400 hover:text-indigo-300 text-right"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full cta-button py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
            loading ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              {isSingUp ? "Creating Account..." : "Logging in..."}
            </div>
          ) : isSingUp ? (
            <>
              <FaUserPlus /> Create Account
            </>
          ) : (
            <>
              <PiSignOutBold />
              Login
            </>
          )}
        </button>
      </Form>

      <div className="mt-6 text-center text-sm text-zinc-400">
        {isSingUp
          ? "Already have an account? Please"
          : "Don't have an account?"}
        <Link
          href={isSingUp ? "/login" : "/registration"}
          className="text-indigo-400 hover:text-indigo-300 font-medium"
        >
          {isSingUp ? "Login" : "Create Account"}
        </Link>
      </div>
    </div>
  );
}
