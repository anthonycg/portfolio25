"use client";
import Image from "next/image";
import { NavBar } from "./Nav/NavBar";

export default function Home() {
    return (
        <div className="min-h-screen">
            <NavBar />
            <div className="pl-60 pr-60 p-10">Hello</div>
        </div>
    );
}
