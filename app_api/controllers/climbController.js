var mongoose = require('mongoose');
var climbData = mongoose.model('climbdata');

module.exports.findclimb = function(req, res, next) {
    var weight = req.params.weight;
    if(weight < 19000){
        weight = 18000;
    }else if(weight < 21000){
        weight = 20000;
    }else if(weight < 23000){
        weight = 22000;
    }else if(weight < 25000){
        weight = 24000;
    }else if(weight < 27000){
        weight = 26000;
    }else if(weight < 28500){
        weight = 28000;
    }else{
        weight = 29000;
    };
    
    
    climbData.find({"weight" : weight},{_id:0}, function (err,climbdatas){
        if(err){
            return console.error(err);
        }else{
            var output = "";
            climbdatas.forEach(function(climbdata){
                console.log(climbdata);
                output += "Outputs for your weight: " + climbdata + "</br>";
            })
           
        }
         res.render('climb', {title: 'Climb Data', outputs: output})
    })
    
   
    
}