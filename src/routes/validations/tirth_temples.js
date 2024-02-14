import { body } from 'express-validator';

export const createTirthTempleRules = [
  body('name').exists(),
  body('city').exists(),
  body('state').exists(),
  body('district').exists(),
  body('address').exists(),
  body('destination_id').exists().isInt(),
  body('pin_code').exists().isLength({ min: 5, max: 10 }),
  body('description').exists(),
  body('spiritual_significance').exists(),
  body('timings').optional(),
  body('features').isBoolean().exists(),
];

export const updateTirthTempleRules = [
  body('name').optional(),
  body('city').optional(),
  body('state').optional(),
  body('district').optional(),
  body('address').optional(),
  body('destination_id').optional().isInt(),
  body('pin_code').optional().isLength({ min: 5, max: 10 }),
  body('description').optional(),
  body('spiritual_significance').optional(),
  body('timings').optional(),
  body('features').isBoolean().optional(),
];
