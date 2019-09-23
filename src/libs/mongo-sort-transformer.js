const SORT_ORDERS = {
  asc: 1,
  desc: -1,
};

/*
* @example sort=key1:asc,key2,key3
*/
function transformToMongoSort(sort) {
  if (!sort) {
    return {};
  }
  return sort.split(',').reduce((acc, current) => {
    const [property, sortOrder = 'asc'] = current.split(':');
    acc[property] = SORT_ORDERS[sortOrder];
    return acc;
  }, {});
}

module.exports = transformToMongoSort;
