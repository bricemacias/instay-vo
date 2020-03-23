import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'HotelOwner'
  },
  avatar: String,
  coverImages: [String],
  location: {
    type: String,
    required: true
  },
  description: String,
  website: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Hotel', HotelSchema);
