// Queries
const Query = {
  getAllHotels: async (root, args, { Hotel }) => {
    const allHotels = await Hotel.find().lean();

    return allHotels;
  }

  // getCurrentHotelOwner: async (root, args, { currentUser, HotelOwner }) => {
  //   if (!currentUser) {
  //     return null;
  //   }

  //   const hotelOwner = await HotelOwner.findOne({
  //     _id: currentUser.id
  //   });

  //   return hotelOwner;
  // }
};

// Mutations
const Mutation = {
  addHotel: async (
    root,
    { name, owner, location, website, avatar, coverImages, description },
    { Hotel, HotelOwner }
  ) => {
    const newHotel = await new Hotel({
      name,
      owner,
      location,
      website,
      avatar,
      coverImages,
      description
    }).save();

    await HotelOwner.findOneAndUpdate(
      { _id: owner },
      { $push: { hotels: newHotel.id } }
    );
    return newHotel;
  }
};

export default { Query, Mutation };
