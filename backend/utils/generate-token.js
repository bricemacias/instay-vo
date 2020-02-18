import jwt from 'jsonwebtoken';

/**
 * Generates a token for Influencer
 *
 * @param {object} user
 * @param {string} secret
 * @param {date} expiresIn
 */

export const createInfluencerToken = (influencer, secret, expiresIn) => {
  const { username, email } = influencer;
  return jwt.sign({ username, email }, secret, { expiresIn });
};
