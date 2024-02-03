"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function signUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const signUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("error found", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-5xl">{loading ? "Processing" : "SignUp"}</h1>
      <hr />
      <br />
      <label htmlFor="username">username</label>
      <input
        className="p-1 rounded-md text-black"
        type="text"
        id="username"
        value={user.username}
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="email">email</label>
      <input
        className="p-1 rounded-md text-black"
        type="text"
        id="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">password</label>
      <input
        className="p-1 rounded-md text-black"
        type="password"
        id="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button
        className="border-2 p-[8px] rounded-2xl border-white"
        onClick={signUp}
        type="button"
      >
        {buttonDisabled ? "No SignUp" : "SignUp"}
      </button>
      <br />
      <Link href="/login">Login</Link>
    </div>
  );
}
