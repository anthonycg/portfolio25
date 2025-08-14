"use client";
import React, { useEffect, useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import axios from "axios";
import { UUID } from "crypto";
import { useRouter } from "next/navigation";

export type Note = {
    id: UUID;
    title: string;
    body: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;
};

export default function Notes() {
    const [notes, setNotes] = useState<Note[]>();

    const getNotes = async () => {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE}/posts`
        );
        setNotes(res.data ?? []);
    };

    useEffect(() => {
        getNotes();
    }, []);

    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-row gap-4">
                <SignedOut>
                    <div className="pt-6">
                        <SignInButton />
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                    <button
                        className="p-4 text-xl text-white rounded-lg bg-grayTheme"
                        onClick={() => router.push("/notes/newNote")}
                    >
                        Create New Note
                    </button>
                </SignedIn>
            </div>
            <div className="flex flex-col w-full gap-4 p-4 sm:w-3/4">
                {notes?.map((note) => (
                    <button
                        key={note.id as unknown as string}
                        className="cursor-pointer"
                        onClick={() => router.push(`/notes/${note.id}`)}
                    >
                        <div className="flex items-center h-20 p-4 bg-darkBlueTheme">
                            <div className="flex flex-row gap-4">
                                <h2>{note.title}</h2>
                                <h3>
                                    {new Date(note.createdAt).toLocaleString(
                                        "en-US",
                                        {
                                            month: "short",
                                            year: "numeric",
                                        }
                                    )}
                                </h3>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
