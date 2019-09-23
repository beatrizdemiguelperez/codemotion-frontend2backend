const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  isPriority: {
    type: Boolean,
    default: false,
  },
}, { versionKey: false, timestamps: true });

schema.plugin(mongoosePaginate);

const Model = mongoose.model('Database', schema);


module.exports = Model;
