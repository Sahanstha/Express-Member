const Member = require("../../../models/v1/public/member");
module.exports = async (id) => {
  console.log(id);
  const member = await Member.findById(id);
  return member;
};
