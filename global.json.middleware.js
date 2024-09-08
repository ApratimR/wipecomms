const global_logger = (req, res, next) => {
    const start = Date.now();

    // Add a listener to the `finish` event on the response object
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Method: ${req.method}, URL: ${req.originalUrl}, Status: ${res.statusCode}, Time: ${duration}ms`);
    });

    next();
  };
  
  module.exports = global_logger;