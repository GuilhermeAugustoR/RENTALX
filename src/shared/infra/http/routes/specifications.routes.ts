import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateSpecificationsController } from "@modules/cars/useCases/createSpecifications/CreateSpecificationsController";
import { ensureAdmin } from "../middlewares/ensureAmind";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationsController();

specificationRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationRoutes };
