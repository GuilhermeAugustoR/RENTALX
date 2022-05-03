import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject } from "tsyringe";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    // @inject("CarRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExist = await this.carsRepository.findById(car_id);

    if (!carExist) {
      throw new AppError("Car not found");
    }
  }
}

export { CreateCarSpecificationUseCase };
