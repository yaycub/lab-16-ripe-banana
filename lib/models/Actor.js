const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: Date,
  pob: String
});

schema.virtual('films', {
  ref: 'Film',
  localField: '_id',
  foreignField: 'cast.actor'
});

module.exports = mongoose.model('Actor', schema);
