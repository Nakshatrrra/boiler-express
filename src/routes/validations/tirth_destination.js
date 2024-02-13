import { body } from 'express-validator';

export const createTirthDestinationRules = [
  body('name').exists(),
  body('description').exists(),
  body('state').exists(),
  body('spiritual_significance').exists(),
  body('district').exists(),
  body('region').exists(),
  body('nature_surrounding').exists(),
  body('popular_destination').isBoolean().exists(),
];

export const updateTirthDestinationRules = [
  body('name').optional(),
  body('description').optional(),
  body('state').optional(),
  body('spiritual_significance').optional(),
  body('district').optional(),
  body('region').optional(),
  body('nature_surrounding').optional(),
  body('popular_destination').isBoolean().optional(),
];
