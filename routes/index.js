var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 're-alive'});
});
/*
var Flights = require('../index.js');
*/
var data = {
          FROM: 'PAR',
          TO: 'AJA',
          DEPARTURE_DATE: '2022-07-17',
          SKIP_HIDDEN_CITY: false,
          RESULTS: 1

};

/*
var CurrentFlight = new Flights(data);

CurrentFlight.getFlightData(function(error, body) {
          body = JSON.stringify(body, undefined, 4);
          console.log(body);
});
*/

module.exports = router;
