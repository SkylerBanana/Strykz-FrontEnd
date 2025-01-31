"use client";
import Link from "next/link";
import { signup } from "../login/actions";
import React from "react";
import { useState } from "react";

interface UserFormErrors {
  username: string[];
  password: string[];
  email: string[];
  confirmPassword: string[];
}

export default function SignupForm() {
  const [errors, setErrors] = useState<UserFormErrors>({
    username: [],
    password: [],
    email: [],
    confirmPassword: [],
  });

  async function clientAction(formData: FormData) {
    const result = await signup(formData);
    if (result) {
      setErrors(result);
    }
  }

  return (
    <form className="flex flex-col w-full justify-center  items-center gap-6">
      <div className="Form_Item">
        <label htmlFor="email">Email address</label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
        {errors.email.map((error, index) => (
          <p key={`email-error-${index}`} className="text-red-500">
            {error}
          </p>
        ))}
      </div>

      <div className="Form_Item">
        <label htmlFor="username">UserName</label>

        <input
          id="username"
          name="username"
          type="text"
          placeholder="User name"
          required
        />
        {errors.username.map((error, index) => (
          <p key={`username-error-${index}`} className="text-red-500">
            {error}
          </p>
        ))}
      </div>

      <div className="Form_Item">
        <label className="flex justify-between" htmlFor="password">
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        {errors.password.map((error, index) => (
          <p key={`password-error-${index}`} className="text-red-500">
            {error}
          </p>
        ))}
      </div>

      <div className="Form_Item">
        <label className="flex justify-between" htmlFor="confirmPassword">
          Confirm Password
        </label>

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />

        {errors.confirmPassword.map((error, index) => (
          <p key={`confirmPassword-error-${index}`} className="text-red-500">
            {error}
          </p>
        ))}
      </div>

      <button
        className="bg-[#1640D6] w-full h-8 rounded font-bold"
        formAction={clientAction}
      >
        Sign Up
      </button>
      <Link href="/login">
        <button>Log in</button>
      </Link>
    </form>
  );
}
