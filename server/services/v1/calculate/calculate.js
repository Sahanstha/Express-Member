module.exports = (queryObj) => {
  return {
    result: eval(queryObj.expression),
  };
};
