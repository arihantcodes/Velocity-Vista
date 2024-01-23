"use client";
import { useState } from "react";
import React, {useEffect} from "react";
import Link from "next/link";

import { useRouter } from 'next/navigation'
import axios from "axios";


const login = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSignin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);

      // Redirect to the '/about' page upon successful login
      router.push('/about');
    } catch (error: any) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if both email and password are non-empty
    if (user.email.trim() !== "" && user.password.trim() !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <form action="" className="bg-white border p-40 shadow-lg">
        <h2 className="text-center font-bold text-xl mb-10 ">
          {loading ? "Processing" : "Login Page"}
        </h2>
        <div>
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="h-10 mb-10 p-2 outline-none w-full border border-gray-200 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="h-10 p-2 mb-10 outline-none w-full border border-gray-200 rounded-md"
          />
          <button
            className={`w-full py-[16px] rounded-full bg-primary-blue text-white mt-4 ${
              buttonDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={onSignin}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "No signin" : "Signin"}
          </button>
          <hr />
          <div className="text-center mt-8">
            <Link href="/signup">Don't have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;