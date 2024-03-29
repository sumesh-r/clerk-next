import React from "react";
import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Page() {
  const { userId } = auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
}
