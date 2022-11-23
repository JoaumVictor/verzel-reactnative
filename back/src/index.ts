import express from "express";
import carRouter from "./routes/car.routes";

const app = express();

const accessControl: express.RequestHandler = (_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,OPTIONS,PUT,PATCH"
  );
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(accessControl);

app.use(express.json());

app.use("/cars", carRouter);

app.listen(3001, () => {
  console.log("API aberta na porta 3001!");
});
