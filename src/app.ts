import express, { Request, Response } from "express";
import cors from "cors"; // CORS মডিউল ইনস্টল করো
import authRouter from './modules/auth/auth.routes';

const app = express();

// CORS middleware ব্যবহার করা
app.use(cors({
  origin: "http://localhost:3000",  // এখানে তোমার frontend URL দিতে হবে
  credentials: true, // যদি cookies বা token পাঠাও
}));

// parsers
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
