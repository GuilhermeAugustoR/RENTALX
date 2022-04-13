import { Router } from "express";

import { CreateSpecificationsController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationsController();

specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
