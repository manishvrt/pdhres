const geoip = require('geoip-lite');

const countryBlockingMiddleware = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  const geo = geoip.lookup(ip);
  const allowedCountries = ['US', 'MX', 'IN']; // US, Mexico, and India
  
  if (geo && allowedCountries.includes(geo.country)) {
    return next(); // Country is allowed, proceed to the next middleware/route
  }

  // If the country is not allowed, block access
  return res.status(403).json({ message: 'Access Denied' });
};

module.exports = countryBlockingMiddleware;
