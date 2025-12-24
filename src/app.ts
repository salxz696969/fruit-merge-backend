import dotenv from "dotenv";
import express from "express";
import gameRoutes from "./routes/game.route";
import { connectToDatabase } from "./mongoose/mongoose";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
connectToDatabase()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  
app.use("/game", gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
