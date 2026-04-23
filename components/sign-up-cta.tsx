"use client";

import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function SignUpCTA({ label }: { label: string }) {
  return (
    <SignUpButton>
      <Button size="lg" className="gap-2">
        {label}
        <span className="text-lg">→</span>
      </Button>
    </SignUpButton>
  );
}
