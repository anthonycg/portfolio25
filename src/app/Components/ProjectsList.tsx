"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

export default function ProjectsList() {
    const router = useRouter();
    return (
        <span className="flex flex-row gap-5">
            <button
                className="cursor-pointer"
                onClick={() => router.push("https://askablackman.me")}
            >
                <Image
                    src="/AskABlackManLogo.PNG"
                    alt="Ask A Black Man Logo"
                    width={200}
                    height={200}
                    className="border-2 border-green-200 rounded-xl"
                />
            </button>
            <button
                className="cursor-pointer"
                onClick={() =>
                    router.push(
                        "https://apps.apple.com/us/app/good-things-happen/id6733219837?platform=iphone"
                    )
                }
            >
                <Image
                    src="/GTH.png"
                    alt="Good Things Happen Logo"
                    width={200}
                    height={200}
                    className="border-2 border-green-200 rounded-xl"
                />
            </button>
            <button
                className="cursor-pointer"
                onClick={() =>
                    router.push(
                        "https://apps.apple.com/us/app/glympse-world-in-review/id6463845075?platform=iphone"
                    )
                }
            >
                <Image
                    src="/GlympseLogo.png"
                    alt="Glympse Logo"
                    width={208}
                    height={208}
                    className="border-2 border-green-200 rounded-xl"
                />
            </button>
        </span>
    );
}
