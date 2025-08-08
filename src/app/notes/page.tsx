"use client";
import React from "react";
import Tiptap from "../TipTap";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

export default function Notes() {
    return (
        <div className="flex justify-center">
            <SimpleEditor />
        </div>
    );
}
