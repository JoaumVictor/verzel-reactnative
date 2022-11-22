import { PrismaClient } from "@prisma/client";
import { CarDto } from "../interfaces/car-dto";

export default class CarService {
  constructor(private prisma: PrismaClient) {}

  public async getCars() {
    const cars = await this.prisma.car.findMany();
    return cars;
  }

  public async getCarById(id: string) {
    const car = await this.prisma.car.findUnique({
      where: {
        id,
      },
    });
    return car;
  }

  public async createCar(car: CarDto) {
    const newCar = await this.prisma.car.create({
      data: car,
    });
    return newCar;
  }

  public async updateCar(id: string, car: CarDto) {
    const updatedCar = await this.prisma.car.update({
      where: {
        id,
      },
      data: car,
    });
    return updatedCar;
  }

  public async deleteCar(id: string) {
    const deletedCar = await this.prisma.car.delete({
      where: {
        id,
      },
    });
    return deletedCar;
  }
}
