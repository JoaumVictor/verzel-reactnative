import CarService from "./../services/car-services";
import { Request, Response } from "express";

export default class CarController {
  constructor(private carService: CarService) {}

  public async getCars(_req: Request, res: Response) {
    try {
      const cars = await this.carService.getCars();
      res.json(cars);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getCarById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const car = await this.carService.getCarById(id);
      res.json(car);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createCar(req: Request, res: Response) {
    try {
      const { body } = req;
      const newCar = await this.carService.createCar(body);
      res.status(201).json(newCar);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async updateCar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedCar = await this.carService.updateCar(id, body);
      res.json(updatedCar);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteCar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedCar = await this.carService.deleteCar(id);
      res.json(deletedCar);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
