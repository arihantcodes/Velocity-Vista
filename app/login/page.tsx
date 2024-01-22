"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Custombtn from "@/components/Custombtn";

const login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const onSignin = async () => {};
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <form action="" className="bg-slate-100 p-40 shadow-lg  ">
        <h2 className="text-center font-bold text-xl mb-10 ">Login Page</h2>
        <div>
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
            onClick={onSignin}
          >
            Login
          </button>
          <hr />
          <div className="text-center mt-8">
          <Link href="/signup">
            Don't have an account?
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
