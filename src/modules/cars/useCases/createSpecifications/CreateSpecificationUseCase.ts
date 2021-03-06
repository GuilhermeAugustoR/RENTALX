import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlredyExist =
      await this.specificationRepository.findByName(name);

    if (specificationAlredyExist) {
      throw new AppError("Specification alredy exist!");
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
