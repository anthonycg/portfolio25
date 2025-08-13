"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Note } from "../notes/page";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

export default function RightSideBar() {
    const [notes, setNotes] = useState<Note[]>();
    const getNotes = async () => {
        const res = await axios.get(`${process.env.API_BASE}/posts`);
        setNotes(res.data ?? []);
    };

    const router = useRouter();
    const pathname = usePathname();

    const hide = pathname === "/notes";

    useEffect(() => {
        getNotes();
    }, []);

    if (hide) return null;
    return (
        <div className="flex flex-col w-full gap-4 p-4 sm:w-3/4">
            <div>
                <Link href={"/notes"}>Notes</Link>
            </div>
            {notes?.slice(0, 4).map((note) => (
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
    );
}
