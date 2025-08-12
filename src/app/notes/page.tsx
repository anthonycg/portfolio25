"use client";
import React, { useEffect, useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/tiptap-ui-primitive/button";
import axios from "axios";
import { UUID } from "crypto";

type Note = {
    id: UUID;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
};

export default function Notes() {
    const [notes, setNotes] = useState<Note[]>();
    useEffect(() => {
        axios.get("http://localhost:5000/posts");
    }, []);
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
                {notes?.map((note) => (
                    <div
                        className="flex items-center h-20 bg-darkBlueTheme"
                        key={note.title}
                    >
                        <div className="flex flex-row gap-4">
                            <h2>{note.title}</h2>
                            <h3>{note.createdAt.toLocaleString()}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
