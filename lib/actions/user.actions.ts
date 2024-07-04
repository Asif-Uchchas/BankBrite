"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { use } from "react";

export const signIn = async ({email, password}: signInProps) => {
  try {
    const { account } = await createAdminClient();
      
      const response = await account.createEmailPasswordSession(email, password);

      return parseStringify(response);

  } catch (error) {
    console.error("Error", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
      const { account } = await createAdminClient();
      
      

    const newUser = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`,
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
      
      return parseStringify(newUser);

  } catch (error) {
    console.error("Error", error);
  }
};

export async function getLoggedInUser() {
  debugger
  try {
    const { account } = await createSessionClient();
      const user = await account.get();
    console.log("user", user)
    
      return parseStringify(user)
  } catch (error) {
    console.log("user not found")
    return null;
  }
}

