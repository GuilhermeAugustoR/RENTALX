import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlredyExist = this.specificationRepository.findByName(name);

    if(specificationAlredyExist){
        throw new Error('Specification alredy exist!')
    }
    
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
