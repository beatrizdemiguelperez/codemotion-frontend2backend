module.exports = (data = {}) => {
  const { docs, ...pagination } = data;

  if (docs) {
    return {
      data: docs,
      pagination: {
        total: pagination.totalDocs,
        limit: pagination.limit,
        hasPrevPage: pagination.hasPrevPage,
        hasNextPage: pagination.hasNextPage,
        page: pagination.page,
        pages: pagination.totalPages,
        pagingCounter: pagination.pagingCounter,
        prevPage: pagination.prevPage,
        nextPage: pagination.nextPage,
      },
    };
  }
  return { data };
};
