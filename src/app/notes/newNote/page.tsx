"use client";
import React from "react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

export default function Notes() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-3/4">
                <SimpleEditor />
            </div>
        </div>
    );
}
