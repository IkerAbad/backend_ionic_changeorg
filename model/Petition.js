const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Petition = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
}, {
  collection: 'petitions'
})
module.exports = mongoose.model('Petition', Petition)