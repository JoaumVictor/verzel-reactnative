import express from "express";
import carRouter from "./routes/car.routes";

const app = express();

app.use(express.json());

app.use("/cars", carRouter);

app.listen(3001, () => {
  console.log("API aberta na porta 3001!");
});
