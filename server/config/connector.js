const mongoose = require("mongoose");
module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("API server is running successfully");
  } catch (err) {
    console.error("Database constists of error", err);
  }
};
