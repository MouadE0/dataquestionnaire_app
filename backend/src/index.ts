import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client'
import cors from "cors";

//For env File
dotenv.config();
const prisma = new PrismaClient()
const app: Application = express();
const port = process.env.PORT || 8000;
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express & TypeScript Server");
});


app.get("/indicators", async (req, res) => {
    try {
        const indicators = await prisma.indicator.findMany();
        res.json(indicators);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch indicators" });
    }
});

/* app.get("/ind1", async (req, res) => {
    const name = req.query.name as string || "ind1"
    const user = await prisma.user.create({
        data: {
            name: name,
            email: name + '@bvrcompany.io',
        },
    })
    res.send(user);
}); */





app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
