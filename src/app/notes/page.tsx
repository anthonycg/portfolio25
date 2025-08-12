"use client";
import React from "react";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/tiptap-ui-primitive/button";

const mockNotes = [
    {
        title: "Why I Love TypeScript",
        date: "2025-08-10",
        text: "TypeScript helps me catch bugs early and makes my code more maintainable. I especially love the type inference and editor tooling.",
    },
    {
        title: "Learning Next.js App Router",
        date: "2025-08-09",
        text: "The new App Router in Next.js 13+ is a game changer. File-based routing, server components, and layouts make building apps much more intuitive.",
    },
    {
        title: "Thoughts on UI Design",
        date: "2025-08-08",
        text: "Good UI design is about clarity and simplicity. I try to keep my interfaces clean and focus on user experience above all.",
    },
];

export default function Notes() {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-row gap-4">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                    <Button>New</Button>
                </SignedIn>
            </div>
            <div className="flex flex-col w-3/4 gap-4">
                {mockNotes.map((note) => (
                    <div
                        className="flex items-center h-20 bg-darkBlueTheme"
                        key={note.title}
                    >
                        <div className="flex flex-row gap-4">
                            <h2>{note.title}</h2>
                            <h3>{note.date}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
