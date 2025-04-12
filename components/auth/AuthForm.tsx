"use client";

import { ZodType } from "zod";
import React, { useState } from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  defaultValues,
  schema,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    console.log(data);
    const result = await onSubmit(data);

    if (result.success) {
      //   toast({
      //     title: "Success",
      //     description: isSignIn
      //       ? "You have successfully signed in."
      //       : "You have successfully signed up.",
      //   });

      router.push("/dashboard");
    } else {
      //   toast({
      //     title: `Error ${isSignIn ? "signing in" : "signing up"}`,
      //     description: result.error ?? "An error occurred.",
      //     variant: "destructive",
      //   });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 w-full"
        >
          {type === "SIGN_UP" && (
            <FormField
              control={form.control}
              name={"fullName" as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize block text-sm font-medium text-gray-300">
                    Full name
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="text"
                      {...field}
                      className="w-full h-auto px-3 py-3 bg-gray-900 border-gray-800 rounded-lg shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name={"email" as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize block text-sm font-medium text-gray-300">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type="email"
                    {...field}
                    className="w-full h-auto px-3 py-3 bg-gray-900 border-gray-800 rounded-lg shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"password" as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize block text-sm font-medium text-gray-300">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      required
                      type={showPassword ? "text" : "password"}
                      {...field}
                      className="w-full h-auto px-3 py-3 bg-gray-900 border-gray-800 rounded-lg shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full flex justify-center cursor-pointer h-auto py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 transition-colors"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default AuthForm;
