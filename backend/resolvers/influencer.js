import { createInfluencerToken } from '../utils/generate-token';
import bcrypt from 'bcrypt';

// Queries
const Query = {
  getAllInfluencers: async (root, args, { Influencer }) => {
    const allInfluencers = await Influencer.find();

    return allInfluencers;
  },

  getCurrentInfluencer: async (root, args, { currentUser, Influencer }) => {
    if (!currentUser) {
      return null;
    }

    const influencer = await Influencer.findOne({
      _id: currentUser.id
    });

    return influencer;
  }
};

// Mutations
const Mutation = {
  addInfluencer: async (
    root,
    { firstName, lastName, email, password, username, instagram, joinDate },
    { Influencer }
  ) => {
    const newInfluencer = await new Influencer({
      email,
      password,
      firstName,
      lastName,
      username,
      instagram,
      joinDate
    }).save();
    return newInfluencer;
  },

  signinInfluencer: async (root, { username, password }, { Influencer }) => {
    const influencer = await Influencer.findOne({ username });
    if (!influencer) {
      throw new Error('User not found');
    }

    const isValidPassword = await bcrypt.compare(password, influencer.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    return {
      token: createInfluencerToken(influencer, process.env.SECRET, '1hr')
    };
  },

  signupInfluencer: async (
    root,
    { firstName, lastName, username, email, password, instagram },
    { Influencer }
  ) => {
    const influencer = await Influencer.findOne({ username: username });
    if (influencer) {
      throw new Error('Influencer already exists');
    }

    const newInfluencer = await new Influencer({
      firstName,
      lastName,
      username,
      email,
      password,
      instagram
    }).save();
    return {
      token: createInfluencerToken(newInfluencer, process.env.SECRET, '1hr')
    };
  }
};

export default { Query, Mutation };
