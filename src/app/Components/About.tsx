"use client";
import React from "react";

export default function About() {
    return (
        <div>
            <div className="">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Anthony Gibson
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-gray-400">
                    I'm a software engineer who learns by building. Most
                    projects start as experiments that become real products.
                </p>
            </div>
            <h2 className="mt-8 text-xl font-semibold tracking-wide uppercase">
                Core Technologies
            </h2>

            <p className="mt-2 text-gray-300">
                TypeScript, JavaScript, React, React Native, Next.js, Node.js,
                GraphQL
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
    );
}
