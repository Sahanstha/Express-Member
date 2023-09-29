const Member = require("../../../models/v1/public/member");
module.exports = async (id) => {
  console.log("start");
  const member = await Member.deleteOne({_id: id},
    );
  return member;
};
