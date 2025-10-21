"use client";

import { Accessibility } from "lucide-react";
import { ReactNode } from "react";

interface AccessibilityNoteProps {
  children: ReactNode;
}

export function AccessibilityNote({ children }: AccessibilityNoteProps) {
  return (
    <div className="flex items-start gap-3 rounded border border-moss/40 bg-moss/20 p-4 text-sm text-bone/85">
      <Accessibility className="mt-1 h-5 w-5 text-moss" aria-hidden />
      <p>{children}</p>
    </div>
  );
}
