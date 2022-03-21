import { Category } from "../model/Category";
import {
  ICcategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICcategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  //void -> não vai ter retorno nenhum
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    //Para chamar o construtuor criado no model de Category
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
