import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const InfluencerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  instagram: {
    type: String,
    require: true
  },
  username: {
    type: String,
    required: true,
    unique: true
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

export default mongoose.model('Influencer', InfluencerSchema);
