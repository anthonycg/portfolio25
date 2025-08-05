"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Index() {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-5">
            <div className="mt-10">
                <div className="text-4xl">Anthony Gibson II</div>
            </div>
            <div>
                Hi, I'm Anthony. I'm a software engineer with a love for
                learning and building. Most times I build something, it starts
                as a learning opportunity that I adapt to a product.
            </div>
            <div className="text-2xl mt-5">Core technologies:</div>
            <div>
                TypeScript, JavaScript, React, React Native, Next.js, Node.js,
                GraphQL
            </div>
            <div className="text-2xl mt-5">Backend & APIs:</div>
            <div>
                GraphQL, REST APIs, Express.js, Next.js, Nest.js, Firebase,
                PostgreSQL, Prisma
            </div>
            <div className="text-2xl mt-5">Cloud & DevOps:</div>
            <div className="text-3xl mt-5">Projects</div>
            <button
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
                    className="rounded-xl"
                />
            </button>
        </div>
    );
}
