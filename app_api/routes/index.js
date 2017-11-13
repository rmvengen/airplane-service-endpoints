var express = require('express');
var router = express.Router();
var ctrlAirplaneData = require('../controllers/airplane');
var ctrlAirportData = require('../controllers/airport');
//var ctrlClimbData = require('../controllers/climbController');


/* GET home page. */
//router.get('/', ctrlAirplane.findPlane);

//router.get('/climbdata/:weight', ctrlClimbData.findclimb);    

//CLIMB DATA
router.get('/ClimbData/:weight', ctrlAirplaneData.climbDataReadOne);
router.get('/ClimbData', ctrlAirplaneData.climbDataReadAll);

//Landing Data
router.get('/LandingData/:weight', ctrlAirplaneData.landingDataReadOne);

//AIrport Data
router.get('/airportData', ctrlAirportData.airportDataReadAll);
//router.get('/airplaneData', ctrlAirportData.airportDataReadAll);

//TakeOffData
router.get('/TakeOffData', ctrlAirplaneData.takeOffDataReadOne);

module.exports = router;
      
/*
router.get('/ask', function(req, res, next) {
  res.render('ask')
  
});


module.exports = router;
*/