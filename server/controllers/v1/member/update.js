const httpStatus = require("http-status");
const memberService = require("../../../services/v1/member");

module.exports = async (req, res, next) => {
  try {
    const message = await memberService.update(req.params.id, req.body);

    res.status(httpStatus.OK).json({
      message: "Success",
      data: message,
    });
  } catch (error) {
    next(error);
  }
};
