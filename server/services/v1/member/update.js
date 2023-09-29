const Member = require("../../../models/v1/public/member");
module.exports = async (id, body) => {
  console.log("start");
  await Member.updateOne(
    { _id: id },
    {
      $set: {
        FirstName: body.FirstName,
        LastName: body.LastName,
        Email: body.Email,
      },
    }
  );
  console.log("end");
  const member = await Member.findById(id);

  return member;
};
