import Link from "next/link";
import React from "react";

export const NavBar = () => {
    return (
        <div>
            <nav className="flex-col gap-5 pt-2 md:flex-row min-w-20 xl:w-1/7 lg:min-h-20">
                <Link href={"/"}>Home</Link>
                <Link href={"/projects"}>Projects</Link>
                <Link href={"/notes"}>Notes</Link>
            </nav>
            {/* <div className="hidden 2xl:flex flex-col w-0.25 bg-green-200 min-h-screen"></div> */}
        </div>
    );
};
