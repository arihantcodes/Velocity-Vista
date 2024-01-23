"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { set } from "mongoose";
import toast from "react-hot-toast/headless";

const signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response.data);
      toast.success("Successfully toasted!");

      router.push("/about");
    } catch (error: any) {
      console.log("signup filled", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <form action="" className="bg-white border p-20 shadow-lg  ">
        <h2 className="text-center font-bold text-xl mb-10 ">
          {loading ? " Procesing" : "Create Your Account"}
        </h2>
        <div>
          <input
            type="text"
            placeholder="username"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className=" h-10 mb-10 p-2 outline-none w-full border border-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className=" h-10 mb-10 p-2 outline-none w-full border border-gray-200 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className=" h-10 p-2 mb-10 outline-none w-full border border-gray-200 rounded-md"
          />
          <button
            className="w-full py-[16px] rounded-full bg-primary-blue text-white mt-4"
            onClick={onSignup}
          >
            Signup
          </button>

          <hr />
          <div className="text-center mt-8">
            <Link href="/login">Already have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default signup;
