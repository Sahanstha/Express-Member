const httpStatus = require("http-status");
const memberService = require("../../../services/v1/member");

module.exports = async (req, res, next) => {
  try {
    console.log(req);
    const message = await memberService.show(req.params.id);

    res.status(httpStatus.OK).json({
      message: "Success",
      data: message,
    });
  } catch (error) {
    next(error);
  }
};
