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

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful", data);
        localStorage.setItem("token", data.token);
      } else {
        console.error("Login error", data.error);
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
              Sign in to your account
            </CardTitle>
            <p className="text-sm text-gray-500">
              Enter your email and password to continue
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            <form className="space-y-4" onSubmit={handleLogin}>
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
                  placeholder="Password"
                  className="h-11"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <p className="text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <a
                href="/register"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Register
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
