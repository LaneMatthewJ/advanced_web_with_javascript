const jsonwebtoken = require('jsonwebtoken');
const {
  confirmUserExists
} = require('../../routes/users/userServices');


const tokenSignature = 'xfiles_is_bestfiles';

const tokenAuth = async (req, res, next) => {
  const header = req.headers.authorization;

  const [type, token] = header.split(' ');

  if (type === 'Bearer') {
    try {
      const payload = jsonwebtoken.verify(token, tokenSignature);
      console.log("payload: ", payload)
      const doesUserExist = await confirmUserExists(payload.userId);

      console.log("doesUserexist? ", doesUserExist)
      if (doesUserExist) {
        next();
      } else {
        res.sent(401);
      }
    } catch (error) {
      res.send(error.message);
    }
  } else {
     res.status(401).send("BAD NEWS")
  }
};

module.exports = tokenAuth;
