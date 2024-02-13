import createError from 'http-errors';

import db from '@/database';

/**
 * POST /tirth_destination
 * Create tirth destination request
 */
export const createTirthDestination = async (req, res, next) => {
  try {
    const tirthDestination = await db.models.tirth_destination
      .create(req.body);

    return res.status(201).json(tirthDestination);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /tirth_destination/:id
 * Get tirth destination by id
 */
export const getTirthDestinationById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const tirthDestination = await db.models.tirth_destination
      .findByPk(id);

    if (!tirthDestination) {
      return next(createError(404, 'There is no tirth destination with this id!'));
    }

    return res.status(200).json(tirthDestination);
  } catch (err) {
    return next(err);
  }
};

/**
 * PUT /tirth_destination/:id
 * Update tirth destination request
 */
export const updateTirthDestination = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [updated] = await db.models.tirth_destination
      .update(req.body, {
        where: { id },
      });

    if (!updated) {
      return next(createError(404, 'There is no tirth destination with this id!'));
    }

    const updatedTirthDestination = await db.models.tirth_destination
      .findByPk(id);

    return res.status(200).json(updatedTirthDestination);
  } catch (err) {
    return next(err);
  }
};

/**
 * DELETE /tirth_destination/:id
 * Delete tirth destination request
 */
export const deleteTirthDestination = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await db.models.tirth_destination
      .destroy({
        where: { id },
      });

    if (!deleted) {
      return next(createError(404, 'There is no tirth destination with this id!'));
    }

    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
};
