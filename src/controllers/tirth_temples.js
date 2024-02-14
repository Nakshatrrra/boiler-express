import createError from 'http-errors';

import db from '@/database';

/**
 * POST /temples
 * Create tirth temple request
 */
export const createTirthTemple = async (req, res, next) => {
  try {
    const tirthTemple = await db.models.tirth_temples
      .create(req.body);

    return res.status(201).json(tirthTemple);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /temples/:id
 * Get tirth temple by id
 */
export const getTirthTempleById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const tirthTemple = await db.models.tirth_temples
      .findByPk(id);

    if (!tirthTemple) {
      return next(createError(404, 'There is no tirth temple with this id!'));
    }

    return res.status(200).json(tirthTemple);
  } catch (err) {
    return next(err);
  }
};

/**
 * PUT /temples/:id
 * Update tirth temple request
 */
export const updateTirthTemple = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [updated] = await db.models.tirth_temples
      .update(req.body, {
        where: { id },
      });

    if (!updated) {
      return next(createError(404, 'There is no tirth temple with this id!'));
    }

    const updatedTirthTemple = await db.models.tirth_temples
      .findByPk(id);

    return res.status(200).json(updatedTirthTemple);
  } catch (err) {
    return next(err);
  }
};

/**
 * DELETE /temples/:id
 * Delete tirth temple request
 */
export const deleteTirthTemple = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await db.models.tirth_temples
      .destroy({
        where: { id },
      });

    if (!deleted) {
      return next(createError(404, 'There is no tirth temple with this id!'));
    }

    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
};
