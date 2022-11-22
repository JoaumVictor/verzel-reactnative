import { Router } from "express";
import CarService from "./../services/car-services";
import prisma from "./../database";
import CarController from "../controllers/car-controller";

const router = Router();

const carService = new CarService(prisma);
const carController = new CarController(carService);

router.get("/", (req, res) => carController.getCars(req, res));
router.post("/", (req, res) => carController.createCar(req, res));
router.get("/:id", (req, res) => carController.getCarById(req, res));
router.put("/:id", (req, res) => carController.updateCar(req, res));
router.delete("/:id", (req, res) => carController.deleteCar(req, res));

export default router;
