import ReturnHomeButton from "@/app/Components/ReturnHomeButton";

type Note = {
    id: string;
    title: string;
    body: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;
};

async function getNote(id: string): Promise<Note> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/post/${id}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Note fetch failed");
    return res.json();
}

export default async function NotePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const note = await getNote(id);

    if (!note) {
        return (
            <div className="max-w-3xl px-6 py-10 mx-auto">
                <h1 className="mb-3 text-3xl font-semibold">404 Not Found</h1>
                <ReturnHomeButton />
            </div>
        );
    }

    return (
        <div className="max-w-3xl px-6 py-10 mx-auto">
            <h1 className="mb-3 text-3xl font-semibold">{note.title}</h1>
            <time className="text-sm text-gray-400">
                {new Date(note.createdAt).toLocaleString()}
            </time>
            <article
                className="mt-6 prose prose-invert"
                dangerouslySetInnerHTML={{ __html: note.body }}
            />
        </div>
    );
}
