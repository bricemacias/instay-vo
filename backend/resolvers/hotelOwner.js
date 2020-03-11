import { createHotelOwnerToken } from '../utils/generate-token';
import bcrypt from 'bcrypt';

const Query = {
  getAllHotelOwners: async (root, args, { HotelOwner }) => {
    const allHotelOwners = await HotelOwner.find();

    return allHotelOwners;
  },

  getCurrentHotelOwner: async (root, args, { currentUser, HotelOwner }) => {
    if (!currentUser) {
      return null;
    }

    const hotelOwner = await HotelOwner.findOne({
      username: currentUser.username
    });
    // .populate({
    //   path: 'favorite',
    //   model: 'Recipe'
    // });

    return hotelOwner;
  }
};

const Mutation = {
  signinHotelOwner: async (root, { username, password }, { HotelOwner }) => {
    const hotelOwner = await HotelOwner.findOne({ username });
    if (!hotelOwner) {
      throw new Error('User not found');
    }

    const isValidPassword = await bcrypt.compare(password, hotelOwner.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    return {
      token: createHotelOwnerToken(hotelOwner, process.env.SECRET, '1hr')
    };
  },

  signupHotelOwner: async (
    root,
    { firstName, lastName, username, email, phone, password },
    { HotelOwner }
  ) => {
    const hotelOwner = await HotelOwner.findOne({ username: username });
    if (hotelOwner) {
      throw new Error('Hotel Owner already exists');
    }

    const newHotelOwner = await new HotelOwner({
      firstName,
      lastName,
      username,
      email,
      phone,
      password
    }).save();
    return {
      token: createHotelOwnerToken(newHotelOwner, process.env.SECRET, '1hr')
    };
  }
};

export default { Query, Mutation };
