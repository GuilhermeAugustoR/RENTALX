import { Router } from "express";
import { createSpecificationsController } from "../modules/cars/useCases/createSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  return createSpecificationsController.handle(req, res);
});

export { specificationRoutes };
