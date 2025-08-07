import Link from "next/link";
import React from "react";

export default function RightSideBar() {
    return (
        <div>
            {/* <div className="hidden 2xl:flex flex-col w-0.25 bg-green-200 min-h-screen"></div> */}
            <nav className="flex flex-col gap-5 pt-8 text-left 2xl:items-center">
                <div>
                    <Link href={"/notes"}>Notes</Link>
                </div>
                <div>
                    <Link href={"/"}>Blog1</Link>
                </div>
                <div>
                    <Link href={"/projects"}> Blog2</Link>
                </div>
                <div>
                    <Link href={"/notes"}> Blog3</Link>
                </div>
            </nav>
        </div>
    );
}
