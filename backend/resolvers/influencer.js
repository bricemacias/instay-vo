import { createInfluencerToken } from '../utils/generate-token';

const Query = {
  getAllInfluencers: async (root, args, { Influencer }) => {
    const allInfluencers = await Influencer.find();

    return allInfluencers;
  }
};

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

  signupInfluencer: async (
    root,
    { username, email, password, instagram },
    { Influencer }
  ) => {
    const influencer = await Influencer.findOne({ username: username });
    if (influencer) {
      throw new Error('Influencer already exists');
    }

    const newInfluencer = await new Influencer({
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
