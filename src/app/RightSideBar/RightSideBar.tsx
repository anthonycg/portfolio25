import Link from "next/link";
import React from "react";

export default function RightSideBar() {
    return (
        <div>
            {/* <div className="hidden 2xl:flex flex-col w-0.25 bg-green-200 min-h-screen"></div> */}
            <nav className="flex-col gap-5 pt-2 text-left md:flex-row min-w-20 lg:min-h-20">
                <Link href={"/"}>Blog1</Link>
                <Link href={"/projects"}> Blog2</Link>
                <Link href={"/notes"}> Blog3</Link>
            </nav>
        </div>
    );
}
