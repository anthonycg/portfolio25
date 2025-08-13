// app/components/ReturnHomeButton.tsx
"use client";

import { useRouter } from "next/navigation";

export default function ReturnHomeButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
    >
      Return Home
    </button>
  );
}
