import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client'
import cors from "cors";

//For env File
dotenv.config();
const prisma = new PrismaClient();
const app: Application = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express & TypeScript Server");
});


app.get("/indicators/all", async (req, res) => {
    try {
        const indicators = await prisma.indicator.findMany();
        res.json(indicators);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch indicators" });
    }
});

app.post("/form/submit", async (req: Request, res: Response) => {
    try {
      const formData = req.body;
      const newFormEntry = await prisma.forms.create({
        data: formData,
      });
      res.status(201).json(newFormEntry);
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ error: "Failed to submit form" });
    }
});

app.get("/indicators", async (req, res) => {
    try {
        const { keywords } = req.query;
        let indicators;
        if (keywords) {
            indicators = await prisma.indicator.findMany({
                where: {
                    indicator: {
                        contains: keywords.toString() 
                    }
                }
            });
        } else {
            indicators = await prisma.indicator.findMany();
        }
        res.json(indicators);
    } catch (error) {
        console.error("Error fetching indicators:", error);
        res.status(500).json({ error: "Failed to fetch indicators" });
    }
});








app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
