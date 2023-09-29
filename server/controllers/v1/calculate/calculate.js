const calculateService = require("../../../services/v1/calculate");
const httpStatus = require("http-status");
module.exports = async (req, res, next) => {
  try {
    const message = await calculateService.calculate(req.body);
    res.status(httpStatus.OK).json({
      ans: message,
    });
  } catch (err) {
    console.log(err);
  }
};
