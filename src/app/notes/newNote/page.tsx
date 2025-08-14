"use client";
import React, { useState } from "react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import axios from "axios";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Notes() {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const handleSave = async () => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/post/new`, {
                title,
                content,
            });
        } catch (err) {
            console.error("save failed", err);
        }
    };

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [StarterKit],
        content: "<p>Start writing…</p>",
    });

    if (!editor) return null;

    return (
        <div className="flex flex-col items-center justify-center">
            <input
                className="w-1/3 p-2 m-4 text-2xl rounded-lg bg-darkBlueTheme"
                placeholder="Title..."
                type="text"
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex w-3/4 h-1/6">
                <SimpleEditor onSave={setContent} />
            </div>
            <button
                className="flex-col w-20 p-2 text-xl rounded-lg md:absolute h-15 md:top-20 md:left-140 bg-grayTheme"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    );
}
