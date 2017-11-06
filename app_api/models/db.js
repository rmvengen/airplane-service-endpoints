var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://cidm4382:cidm4382@ds031691.mlab.com:31691/4382database';
if (process.env.NODE_ENV === 'production'){
    dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI);

//Connection events

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error: ' + err);
});
mongose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

//For we process is restarted or stopped
gracefulShutdown- function(msg, callback){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
});
//Nodemon to restarts
process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', functio() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//App termination
process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});

//Heroku app termination
process.on('SIGTERM', function(){
    gracefulShutdown('Heroku app termination', function(){
        process.exit(0);
    });
});


//Our schemas brought in
// His is name aircreaftData mine is called airplane.js but I changed mine now
require('./aircraftData');
require('./airportData');
/*
//var connectionstring = "mongodb://cidm4382:cidm4382@ds031691.mlab.com:31691/4382database";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;
console.log("promise and connect");
//Bring in your schemas & models
require('./airplane')
*/