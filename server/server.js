import "dotenv/config";
import express from "express";
import cors from "cors";
import prisma from "./db.js";

const app = express();
app.use(express.json());

app.use(cors({ origin: ["http://localhost:3000", "https://sonant.net"] }));

app.get("/post/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.post.findUnique({
            where: { id },
        });
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: "Post Not Found." });
    }
});

app.get("/posts", async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch posts." });
    }
});

app.post("/post/new", async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content)
        return res.status(400).json({ error: "Missing fields" });
    const post = await prisma.post.create({
        data: { title, body: content, authorId: "Anthony" },
    });
    res.json(post);
    res.status(200);
    console.log(content);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Portfolio API running on :${PORT}`));
