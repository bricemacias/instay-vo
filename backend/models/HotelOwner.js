import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const HotelOwnerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: true
  },
  phone: {
    type: Number,
    required: true
  },
  hotels: [{ type: [Schema.Types.ObjectId], ref: 'Hotel' }],
  password: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  verified: {
    type: Boolean,
    default: false
  },
  hasAccess: {
    type: Boolean,
    default: true
  }

  // Ajouter collaborations, campaigns, interested influencers
});

HotelOwnerSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

export default mongoose.model('HotelOwner', HotelOwnerSchema);
