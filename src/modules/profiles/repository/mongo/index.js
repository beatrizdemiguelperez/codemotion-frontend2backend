const Profile = require('./models/profile');
const transformToMongoSort = require('../../../../libs/mongo-sort-transformer');

const create = async (newProfile) => {
  const profileDB = new Profile(newProfile);
  const resp = await Profile.create(profileDB);
  return resp;
};

const get = async (query, options) => {
  const q = { ...query, name: { $regex: new RegExp(query.name, 'i') } };
  const opts = { ...options, sort: transformToMongoSort(options.sort) };
  const results = await Profile.paginate(q, opts);

  return results;
};

const getById = async (_id) => {
  const result = await Profile.findOne({ _id });
  return result;
};

const getTopOf = async (field, limit) => {
  const result = Profile.aggregate([
    { $group: { _id: { [field]: `$${field}` }, count: { $sum: 1 } } },
    { $project: { _id: 1, count: 1 } },
    { $sort: { count: -1 } },
    { $limit: limit },
  ]);
  return result;
};

module.exports = {
  get,
  getById,
  create,
  getTopOf,
};
