import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  hotelName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  }

  // Ajouter collaborations, campaigns, interested influencers
});

export default mongoose.model('Client', ClientSchema);
