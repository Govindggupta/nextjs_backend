"use client";

import axios from "axios";
import { useState } from "react";
import client from '@/db'
// this is how client for the db should be imported 

import { signup } from "@/actions/user";


export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="h-fit p-8 flex-col flex border-2 gap-5">
        <input
          className="border-2 "
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
        />
        <input className="border-2 " 
        onChange={(e) => {
            setPassword(e.target.value);
        }} type="text" placeholder="password" />
        <button className="bg-blue-500"
        onClick={() => {
            axios.post("http://localhost:3000/api/user", 
            {
                username,
                password
            }
           
            // signup(username, password)
          // and then instead of making req like this , you use the signup functino 
          // onclick = {async () => {const response = await signup(username , password )} } // or any other thing you want to use 
          )

            // here we are sending req to the own next server instead of the backend server , which is not a good thing that's why fetching is done differently 
            // so instead of writting the db logic in the route file we directly write it over here for fetching 
        }}>Submit</button>
      </div>
    </div>
  );
}
