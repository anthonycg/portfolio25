"use client";

import About from "./Components/About";
import ProjectsList from "./Components/ProjectsList";

export default function Index() {
    return (
        <div className="flex flex-col justify-center gap-5 px-2 py-4">
            <About />
            <div className="mt-5 text-3xl">Projects</div>
            <ProjectsList />
        </div>
    );
}
