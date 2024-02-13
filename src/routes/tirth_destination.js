import { Router } from 'express';

import * as tirthDestinationController from '@/controllers/tirth_destination';
import * as tirthDestinationValidations from '@/routes/validations/tirth_destination';
import { isAuthenticated, validate } from '@/middleware';

const router = Router();

router.route('/')
  .post(isAuthenticated, validate(tirthDestinationValidations.createTirthDestinationRules), tirthDestinationController.createTirthDestination);

router.route('/:id')
  .put(isAuthenticated, validate(tirthDestinationValidations.updateTirthDestinationRules), tirthDestinationController.updateTirthDestination)
  .delete(isAuthenticated, tirthDestinationController.deleteTirthDestination);

export default router;