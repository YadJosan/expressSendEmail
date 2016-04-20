var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
}); 
router.post('/send',function (req,res,next) {
    var transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'',
            pass:''
        }
        
    });
    
    var mailoptions={
        from:'test <from email>',
        to:req.body.email,
        subject:'Website Submission',
        text:'You have a new submission with following details'+req.body.name+' Email : '+req.body.email+' Message :'+req.body.message,
        html:'<p> You have got following submissions details</p><ul><li>Name :'+req.body.name+'</li><li>Email :'+req.body.email+'</li><li>Message :'+req.body.message+'</li></ul>'        
    };
    
    transporter.sendMail(mailoptions,function(error,info) {
        if(error)
        {
            console.log(error);
            res.redirect('/');
        }
        else
        {
            console.log('Sent Message '+info.reponse);
               res.redirect('/');
        }
    });
})


module.exports = router;
