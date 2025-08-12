import React, { useState } from "react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import axios from "axios";
import { useEditor } from "@tiptap/react";

export default function Notes() {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const handleSave = () => {
        axios.post("http://localhost:5000/post", {
            content: content,
            title: title,
        });
    };

    const editor = useEditor({
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-3/4">
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <SimpleEditor onSave={setContent} />
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
}
