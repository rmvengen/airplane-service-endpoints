var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://cidm4382:cidm4382@ds031691.mlab.com:31691/4382database";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;

/*
{
    "weight": 18000,
    "vfriFlap5": 116,
    "vfriFlap10": 110,
    "vfriFlap15": 107,
    "vClmb": 130
}
*/
//This part that goes into aircraftData.js under models folder

//COpy simon holmes from chapter 7 under app_api models db.js
var climbDataSchema = new mongoose.Schema({
    weight: Number,
    vfriFlap5: Number,
    vfriFlap10: Number,
    vfriFlap15: Number,
    vClmb: Number
});

var ClimbData = mongoose.model('ClimbData', climbDataSchema, 'ClimbData');
//part that goes into aircraftData.js ends here
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
  //ClimbData.find({QUERY SPECIFICATION ENTERED HERE}, function(err, climbdatas){

    ClimbData.find({}, function(err, climbdatas){
        if(err){
            res.send(err);
            return console.error(err);
      }
      
      var output = "";
      
    climbdatas.forEach(function(climbdata) {
        console.log(climbdata.weight);
        output += "weight: " + climbdata.weight + "<br/>";
    })
    /*  
    for(var i = 0; i < climbdatas.length; i++){
        console.log(climbdatas[i].weight);
        output += "weight: " +climbdatas[i].weight + "<br/>";
      }*/
        //pug js loop
        //how we pass off to pug template
        res.send(output);
    res.render('airplanes', {title: 'Airplane Project', outputs: output})
      
     })
 
 // });
   //router.get('/ask', function(req, res, next){
      //res.render('ask')
  /*
    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
  */
  //res.send('You have reached the jackpot');
 
});





module.exports = router;