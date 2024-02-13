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


app.get("/indicators", async (req, res) => {
    try {
        const indicators = await prisma.indicator.findMany();
        res.json(indicators);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch indicators" });
    }
});

app.post("/submitForm", async (req: Request, res: Response) => {
    try {
      const formData = req.body;
      console.log("Received form data:", formData);
      const newFormEntry = await prisma.forms.create({
        data: formData,
      });
      console.log("Form entry created:", newFormEntry);
      res.status(201).json(newFormEntry);
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ error: "Failed to submit form" });
    }
  });








app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
