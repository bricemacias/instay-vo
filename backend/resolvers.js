exports.resolvers = {
  Query: {
    getAllInfluencers: async (root, args, { Influencer }) => {
      const allInfluencers = await Influencer.find();

      return allInfluencers;
    }
  },

  Mutation: {
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
    }
  }
};
