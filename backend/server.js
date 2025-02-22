const express = require('express');
const fetch = require('node-fetch');
const requestIp = require('request-ip');  // Import request-ip
const app = express();

// Middleware to check the user's country
const checkDemographicLock = async (req, res, next) => {
  const clientIp = requestIp.getClientIp(req); // Get the user's IP address
  const apiKey = '4b43ffd1872220'; // Get your API key from ipinfo.io or another service
  const response = await fetch(`https://ipinfo.io/${clientIp}/json?token=${apiKey}`);
  const data = await response.json();

  // Check if the country is US or IN
  if (data.country !== 'US' && data.country !== 'IN') {
    return res.status(403).send('Access restricted to users from the US and India.');
  }

  next(); // Continue to the next middleware or route handler if allowed
};

// Use the demographic lock middleware
app.use(checkDemographicLock);

// Define other routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Run your server
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
