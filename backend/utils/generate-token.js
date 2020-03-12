import jwt from 'jsonwebtoken';

/**
 * Generates a token for Influencer and Hotel Owner
 *
 * @param {object} influencer
 * @param {object} hotelOwner
 * @param {string} secret
 * @param {date} expiresIn
 */

export const createInfluencerToken = (influencer, secret, expiresIn) => {
  const { id, username, email } = influencer;
  return jwt.sign({ id, username, email }, secret, { expiresIn });
};

export const createHotelOwnerToken = (hotelOwner, secret, expiresIn) => {
  const { id, username, email } = hotelOwner;
  return jwt.sign({ id, username, email }, secret, { expiresIn });
};
