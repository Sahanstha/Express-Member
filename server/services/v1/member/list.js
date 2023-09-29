const Member = require("../../../models/v1/public/member");
module.exports = async () => {
  const member = await Member.find();
  return member;
};
