"use client";

import React from "react";
// import axios from "axios";
import { useCallback, useState } from "react";
import Input from "@/components/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // const router = useRouter();

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login",
    );
  }, []);

  // const login = useCallback(async () => {
  //   try {
  //     await signIn("credentials", {
  //       email,
  //       password,
  //       redirect: false,
  //       callbackUrl: "/",
  //     });

  //     router.push("/profiles");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [email, password, router]);

  // const register = useCallback(async () => {
  //   try {
  //     await axios.post("/api/auth", {
  //       email,
  //       name,
  //       password,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [email, name, password, login]);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <form className="flex justify-center">
          <div className="mt-2 w-full self-center rounded-md bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email address or phone number"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button
              // onClick={register}
              className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FaGithub size={32} />
              </div>
            </div>
            <p className="mt-12 text-neutral-500">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="ml-1 cursor-pointer text-white hover:underline"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
