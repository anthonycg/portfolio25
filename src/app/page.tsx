"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Index() {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-5">
            <div className="mt-10">
                <div className="max-w-3xl mx-auto ">
                    <h1 className="text-5xl font-bold tracking-tight text-white">
                        Anthony Gibson II
                    </h1>
                    <p className="max-w-xl mt-4 text-lg leading-relaxed text-gray-400">
                        I'm a software engineer who learns by building. Most
                        projects start as experiments that become real products.
                    </p>
                </div>
                <h2 className="mt-8 text-xl font-semibold tracking-wide uppercase">
                    Core Technologies
                </h2>

                <p className="mt-2 text-gray-300">
                    TypeScript, JavaScript, React, React Native, Next.js,
                    Node.js, GraphQL
                </p>
                <h2 className="mt-8 text-xl font-semibold tracking-wide uppercase">
                    Backend & APIs:
                </h2>
                <div className="mt-2 text-gray-300">
                    GraphQL, REST APIs, Express.js, Next.js, Nest.js, Firebase,
                    PostgreSQL, Prisma
                </div>
                <h2 className="mt-8 text-xl font-semibold tracking-wide uppercase">
                    Cloud & DevOps:
                </h2>
                <div className="mt-2 text-gray-300">
                    AWS (S3, Lambda, DynamoDB, API Gateway), Docker
                </div>
            </div>

            <div className="mt-5 text-3xl">Projects</div>
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
            </span>
        </div>
    );
}
