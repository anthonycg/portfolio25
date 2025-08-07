import Link from "next/link";
import React from "react";

export const NavBar = () => {
    return (
        <div>
            <nav className="flex flex-row items-center justify-center gap-4 bg-gray-700 md:pt-8 2xl:flex-col md:bg-transparent">
                <div>
                    <Link href={"/"}>Home</Link>
                </div>
                <div>
                    <Link href={"https://github.com/anthonycg"}>Github</Link>
                </div>
                <div>
                    <Link href={"https://www.linkedin.com/in/anthonycg/"}>
                        LinkedIn
                    </Link>
                </div>
                <div>
                    <Link href={"/projects"}>Projects</Link>
                </div>
                {/* <div>
                    <Link href={"/notes"}>Notes</Link>
                </div> */}
            </nav>
            {/* <div className="hidden 2xl:flex flex-col w-0.25 bg-green-200 min-h-screen"></div> */}
        </div>
    );
};
