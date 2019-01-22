var express = require('express');
var router = express.Router();
var Pin = require('../models/Pin');
var GeneratePin = require('../helper/GeneratePin');


// Next : hash pin, check email already or not from error code, sendmail or sms
///pin/generate POST
// Email/ Phone Number/ Transaction Id (need to be unique)
router.post('/pin/generate', function (req, res) {
    var emailaddress = req.body.email;
    var generatedpin = GeneratePin();
    var date = new Date();
    date.setDate(date.getDate() + 7);
    const pin = new Pin({
        email: emailaddress,
        pin: generatedpin,
        expiredAt: date
    });

    pin.save()
        .then(result => {
            res.send({ pin: result.pin });
        })
        .catch(err => {
            res.send({ error: "pin has been generated" });
        });
});

//Next : Count limiter below 6 and not verfied, send pin function, not below 60 second
///pin/resend POST
//Resend unique PIN that used for verification 
//Input : Email/ Phone Number/ Transaction Id (need to be unique)
router.post('/pin/resend', function (req, res) {
    var emailaddress = req.body.email;
    Pin.findOne({where:{email : emailaddress}}).then(result => {
        result.count = result.count + 1;
        return result.save(result.count);
    }).then(result => {
        res.send({count: result.count});
    })
    .catch(err => {
        console.log(err);
        res.send("error");

    })
});

//Next : check expire date, not verfied, 
///pin/verify POST
//Verify that User Unique ID is valid and matches with generated PIN
//Input : Email/ Phone Number/ Transaction Id (need to be unique) + unique PIN Number
router.post('/pin/verify', function (req, res) {
    var emailaddress = req.body.email;
    var pinaddress = req.body.pin;
    var date = new Date();
    Pin.findOne({where:{email : emailaddress, pin : pinaddress, isVerified : 0, expiredAt: { [Op.gt]: date } }}).then(result => {
        if(!!result){result.isVerified = true;
        return result.save(result.isVerified);}else{
            return result;
        }
    }).then(result => {
        if(!!result){
        res.send({verified: result.isVerified});
        }else{
            res.send({error : true});   
        }
    })
    .catch(err => {
        console.log(err);
        res.send("error");

    })
});


///pin/check GET params
//Check User ID has been verified or not 
//Input : Email/ Phone Number/ Transaction Id (need to be unique)
router.get('/pin/check/:email', function (req, res) {

    Pin.findOne({where: {email : req.params.email}}).then(result => {
        res.send({verfied: result.isVerified});
    }).catch(err =>{
        res.send("error");
    });
 
});

//Next Add Regenerate. Only can accessed when token expired. Now > expire date.

module.exports = router;