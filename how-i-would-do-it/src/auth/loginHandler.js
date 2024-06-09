const Auth = require("./database");

async function loginHandler(req, res, next) {
  try {
    const user = await Auth.validateUser("username2", "jfkdfdl");
    console.log("THIS IS THE USER", user);
    return res.json(user);
  } catch (e) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
module.exports = loginHandler;
