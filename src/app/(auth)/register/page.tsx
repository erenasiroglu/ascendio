"use client";
import React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import google from "../../../../public/google.svg";
import Image from "next/image";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await response.json();
      console.log("Registration response:", data);

      if (response.ok) {
        console.log("Registration successful", data);
        alert("Please check your email to verify your account");
      } else {
        console.error("Registration error", data.error);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 bg-[#262160] items-center justify-center hidden lg:flex">
        <div className="max-w-lg text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Ascendio CV</h1>
          <p className="text-lg text-blue-100">
            Create professional CVs with AI-powered tools and stand out from the
            crowd
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-[400px] shadow-xl border-0 rounded-[40px]">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Create an account
            </CardTitle>
            <p className="text-sm text-gray-500">
              Enter your information to get started
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            <form className="space-y-4" onSubmit={handleRegister}>
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Full name"
                  className="h-11"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="h-11"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Create a password"
                  className="h-11"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-sm text-gray-500">
                By creating an account, you agree to our{" "}
                <a href="/terms" className="text-blue-600 hover:text-blue-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Privacy Policy
                </a>
              </div>

              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full">
                  Create account
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <Image
                    className="mr-2"
                    src={google}
                    alt="Google"
                    width={24}
                    height={24}
                  />
                  Continue with Google
                </Button>
                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    Sign in
                  </a>
                </p>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default RegisterPage;
