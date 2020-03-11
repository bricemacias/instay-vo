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
  const { username, email } = influencer;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

export const createHotelOwnerToken = (hotelOwner, secret, expiresIn) => {
  const { username, email } = hotelOwner;
  return jwt.sign({ username, email }, secret, { expiresIn });
};
