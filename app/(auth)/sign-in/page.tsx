"use client"

import React from "react";
import Link from "next/link";
import LogoIcon from "@/components/Logo/LogoIcon";
import RightSection from "@/components/auth/RightSection";
import AuthForm from "@/components/auth/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth";

const page = () => {
  return (
    <div className="min-h-screen relative bg-black flex">
      {/* Left Section */}
      <Link
        href="/"
        className="items-center absolute top-4 left-4 justify-center lg:flex"
      >
        <LogoIcon />
      </Link>

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="text-left mb-12">
            <h1 className="text-4xl font-bold text-white mb-3">Welcome Back</h1>
            <p className="text-gray-400">
              Sign in to access your PropertyFile account
            </p>
          </div>
          <div>
            <AuthForm
              schema={signInSchema}
              type="SIGN_IN"
              defaultValues={{
                email: "",
                password: "",
              }}
              onSubmit={signInWithCredentials}
            />
            <div className="text-center mt-5 space-y-2">
              <div>
                <a
                  href="#"
                  className="text-sm text-emerald-500 hover:text-emerald-400"
                >
                  Forgot password?
                </a>
              </div>
              <div className="text-sm text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-emerald-500 hover:text-emerald-400"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <RightSection />
    </div>
  );
};

export default page;
