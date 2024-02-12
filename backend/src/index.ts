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

app.get("/mouad", async (req, res) => {
    const users = await prisma.user.findMany({
         where: {x
             id: 1
         }
    })
    res.send(users);
});

app.get("/achraf", async (req, res) => {
    const name = req.query.name as string || "li7wak"
    const user = await prisma.user.create({
        data: {
            name: name,
            email: name + '@prisma.io',
        },
    })
    res.send(user);
});





app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
