import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateSpecificationsController } from "@modules/cars/useCases/createSpecifications/CreateSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationsController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
