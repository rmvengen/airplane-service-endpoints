var mongoose = require('mongoose');
var ClimbData = mongoose.model('ClimbData');
var TakeOffData = mongoose.model('TakeOffData');
var LandingData = mongoose.model('LandingData');

//utility method for the module
var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
}

//Climb Data////////
module.exports.climbDataReadAll = function(req, res){
    console.log("Finding all Climb Data Records", req);
    
    ClimbData
        .find({})
        .exec(function(err, climbData) {
            if(err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(climbData);
            sendJSONresponse(res, 200, climbData);
        });
}

//Get climb data by weight
module.exports.climbDataReadOne = function(req, res){
    console.log('Finding Climb Data Record', req.params);
    if(req.params && req.params.weight){
        ClimbData
        .find({
            weight: req.params.weight
        })
        .exec(function(err, climbData){
            if(!climbData){
                sendJSONresponse(res, 404,{
                    "message": "weight value not found"
                });
                return;
            }
            else if (err){
                console.log(err);
                sendJSONresponse(res,404, err);
                return;
            }
            console.log(climbData);
            sendJSONresponse(res, 200, climbData);
        });
    }
    else{
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message" : "No weight value in request"
        });
    }
};
//TakeOffData
module.exports.takeOffDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        TakeOffData
            .find({
                weight: req.params.weight,
            })
            .exec(function(err, takeOffData) {
                if (!takeOffData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(takeOffData);
                sendJSONresponse(res, 200, takeOffData);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};



//Landing Data

//// LANDING DATA //////////////////////////////////////////////////////////////
/* GET LandingData by weight */
/*module.exports.landingdataReadAll = function(req, res) {
    console.log("Finding all Climb Data Records", req);
    LandingData
        .find({})
        .exec(function(err, landingData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(landingData);
            sendJSONresponse(res, 200, landingData);
        });
};
*/

module.exports.landingDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        LandingData
            .find({
                weight: req.params.weight,
            })
            .exec(function(err, landingData) {
                if (!landingData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(landingData);
                sendJSONresponse(res, 200, landingData);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};




/*First practice on own
module.exports.findPlane = function(req, res, next) {
      ClimbData.find({}, function (err,climbdatas){
        if (err){
            return console.error(err);
        }else{
            var output = "";
            climbdatas.forEach(function(climbdata){
           console.log(climbdata.weight);
          output += "Weight: " + climbdata.weight + "<br>";
        
      })
        }
      
      console.log("inside controller");
      
      
      res.render('airplane',  {title: 'Airplane Project', outputs :output})

})};
*/