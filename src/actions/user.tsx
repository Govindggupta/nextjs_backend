"use server"

import client from "@/db" 

export async function signup(username: string, password: string) {
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}

// so instead of making a post request to the server , we write this kind of a function and then take use it in the client directly . 
// This is useful if you need to add the data to the server directly , such as form submission and all, for further please refer some source