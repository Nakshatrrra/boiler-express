import { Router } from 'express';

import * as tirthTempleController from '@/controllers/tirth_temples';
import * as tirthTempleValidations from '@/routes/validations/tirth_temples';
import { isAuthenticated, validate } from '@/middleware';

const router = Router();

router.route('/')
  .post(isAuthenticated, validate(tirthTempleValidations.createTirthTempleRules), tirthTempleController.createTirthTemple);

router.route('/:id')
  .get(tirthTempleController.getTirthTempleById)
  .put(isAuthenticated, validate(tirthTempleValidations.updateTirthTempleRules), tirthTempleController.updateTirthTemple)
  .delete(isAuthenticated, tirthTempleController.deleteTirthTemple);

export default router;
