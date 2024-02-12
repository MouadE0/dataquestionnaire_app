"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
//For env File
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Welcome to Express & TypeScript Server");
});
app.get("/indicators", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const indicators = yield prisma.indicator.findMany();
        res.json(indicators);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch indicators" });
    }
}));
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
