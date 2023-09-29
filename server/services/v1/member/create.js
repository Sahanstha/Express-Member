const Member = require("../../../models/v1/public/member");

module.exports = async (createObj) => {
  const member = new Member({
    FirstName: createObj.FirstName,
    LastName: createObj.LastName,
    Email: createObj.Email,
  });
  const saveMember = await member.save();
  console.log("Member Added", saveMember);
  return saveMember;
};
