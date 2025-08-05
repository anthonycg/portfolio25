import Link from "next/link";
import React from "react";

export const NavBar = () => {
    return (
        <div className="flex flex-row">
            <nav className="hidden md:flex flex-col w-1/5 md:w-1/4 xl:w-1/6  min-h-screen p-8 gap-5  border-r-2">
                <Link href={"/"}>Home</Link>
                <Link href={"/projects"}>Projects</Link>
                <Link href={"/notes"}>Notes</Link>
            </nav>
            <div className="hidden md:flex flex-col w-0.25 bg-gradient-to-b from-blue-600 to-gray-700 min-h-screen"></div>
        </div>
    );
};
