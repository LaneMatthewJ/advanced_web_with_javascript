const logger = (req, res, next) => {
  const requestedRoute = req.method + ":" + req.url;
  const timeOfRequest = new Date();

  const logBody = {
    requestedRoute,
    timeOfRequest,
  };

  console.log(logBody);
  next();
};

module.exports = logger;
