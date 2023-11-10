"use client";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      signout
    </button>
  );
};

export default SignOut;
