"use client";

import Link from "next/link";
import React from "react";
// import {axios} from "axios";
import { useRouter } from "next/navigation";

export default function login() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const login = async () => {};

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-5xl">login Page</h1>
      <hr />
      <br />
      
      <label htmlFor="email">email</label>
      <input className="p-1 rounded-md"
        type="text"
        id="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">password</label>
      <input className="p-1 rounded-md"
        type="password"
        id="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br/>
      <button className="border-2 p-[8px] rounded-2xl border-white" onClick={login } type="button">Click here to login</button>
      <br />
      <Link href="/login">Login</Link>
    </div>
  );
}
