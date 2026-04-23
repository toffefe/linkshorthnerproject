"use client";

import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function HeaderAuth() {
  const { isSignedIn } = useAuth();

  return isSignedIn ? (
    <UserButton />
  ) : (
    <>
      <SignInButton>
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
      </SignInButton>
      <SignUpButton>
        <Button size="sm">Sign up</Button>
      </SignUpButton>
    </>
  );
}
