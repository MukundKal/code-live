var express = require('express');
var router = express.Router();
const { validationResult } = require('express-validator');

var nodemailer = require('nodemailer')
var config = require('../config')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Live Coder' });
});

router.get('/about', (req, res,next)=> {
  res.render('about', {title: 'Share and Code Live using our P2P Environment'})

} );

router.route('/contact')
.get((req,res,next) => res.render('contact', {title: 'Share and Code Live using our P2P Environment'}))
.post((req,res,next) =>
          {
          req.checkBody('name', 'Please Enter Name').notEmpty();
          req.checkBody('email', 'Invalid Email' ).isEmail();
          req.checkBody('message', 'Empty/Null Message').notEmpty();
          res.render('thankyou', {title: 'Share and Code Live using our P2P Environment'}) 
          } 
          
        )

module.exports = router;
