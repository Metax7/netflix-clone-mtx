"use client";

import Input from "@/components/input";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login",
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-auth-hero bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src={"/images/logo.png"}
            width={1280}
            height={346}
            priority={true}
            alt="logo"
            className="h-12 w-40"
          />
        </nav>
        <div className="flex justify-center">
          <div className="mt-2 w-full self-center rounded-md bg-black bg-opacity-70 p-16 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-5">
              {variant == "register" && (
                <Input
                  id="username"
                  label="Username"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              )}
              <Input
                id="email"
                label="Email"
                type="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <button className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700">
              {variant === "login" ? "Login" : "Sign In"}
            </button>
            <p className="mt-12 text-neutral-500">
              {variant === "login"
                ? "First time using Netflix?"
                : "Alredy have an account?"}
              <span
                onClick={toggleVariant}
                className="ml-1 cursor-pointer text-white hover:underline"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
