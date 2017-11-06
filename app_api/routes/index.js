var express = require('express');
var router = express.Router();
var ctrlAirplaneData = require('../controllers/airplane');
var ctrlAirportData = require('../controllers/airport');
//var ctrlClimbData = require('../controllers/climbController');


/* GET home page. */
//router.get('/', ctrlAirplane.findPlane);

//router.get('/climbdata/:weight', ctrlClimbData.findclimb);    

//CLIMB DATA
router.get('/climbData/:weight', ctrlAirplaneData.climbDataReadOne);
router.get('/climbData', ctrlAirplaneData.climbDataReadAll);

//Landing Data
router.get('/landingData/:weight', ctrlAirplaneData.landingDataReadOne);

//AIrport Data
router.get('/airportData', ctrlAirportData.airportDataReadAll);

module.exports = router;
      
/*
router.get('/ask', function(req, res, next) {
  res.render('ask')
  
});


module.exports = router;
*/