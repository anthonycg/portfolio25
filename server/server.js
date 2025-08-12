import express from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Attach Clerk middleware once, early
app.use(clerkMiddleware());

// Public route
app.get("/health", (_req, res) => res.json({ ok: true }));

// Protected route: only signed-in users can access
app.post("/posts", requireAuth(), async (req, res) => {
    const userId = req.auth.userId;
    const { title, body } = req.body;
    if (!title || !body)
        return res.status(400).json({ error: "Missing fields" });

    // TODO: write to DB here...
    res.json({ ok: true, by: userId });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Portfolio API running on :${PORT}`));
