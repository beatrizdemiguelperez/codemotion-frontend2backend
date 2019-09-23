const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  editorId: { type: String, required: true },
  languageId: { type: String, required: true },
  databaseId: { type: String, required: true },
  frameworkId: { type: String, required: true },
}, { versionKey: false, timestamps: true });

schema.plugin(mongoosePaginate);

const Model = mongoose.model('Profile', schema);


module.exports = Model;
