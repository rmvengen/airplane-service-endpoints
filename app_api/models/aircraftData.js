var mongoose = require('mongoose');

var ClimbDataSchema = new mongoose.Schema({
    weight: Number,
    vfriFlap5: Number,
    vfriFlap10: Number,
    vfriFlap15 : Number,
    vClmb : Number
});
mongoose.model('ClimbData', ClimbDataSchema, 'ClimbData');
//var climbData = mongoose.model('climbdata', climbDataSchema, 'climbdata');

var TakeOffSchema = new mongoose.Schema({
    flaps: Number,
    above20: Boolean,
    weight: Number,
    altitude: Number,
    Vr: Number,
    V2: Number
    
    
});

mongoose.model('TakeOffData', TakeOffSchema, 'TakeOffData');

var LandingSchema = new mongoose.Schema({
    flaps: Number,
    weight: Number,
    Vapp: Number,
    Vref: Number,
    Vga: Number
});

mongoose.model('LandingData', LandingSchema, 'LandingData');