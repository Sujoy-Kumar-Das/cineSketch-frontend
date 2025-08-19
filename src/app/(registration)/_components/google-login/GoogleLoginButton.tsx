"use client";
import useSocialLogin from "@/hooks/useSocialLogin";
import Image from "next/image";

export default function GoogleLoginButton() {
  const { handleSocialLogin } = useSocialLogin("google");

  return (
    <button
      onClick={handleSocialLogin}
      className="w-full flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 py-3 px-4 rounded-lg border border-zinc-700/50 mb-4 transition-colors"
    >
      <Image
        height={20}
        width={20}
        src="https://www.google.com/favicon.ico"
        className="w-5 h-5"
        alt="Google"
      />
      <span>Continue with Google</span>
    </button>
  );
}
