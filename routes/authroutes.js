const passport = require('passport')
var express = require('express')
var router = express.Router();




router.get('/auth/google', passport.authenticate('google',
{
  scope:['profile', 'email']

})
)

 
router.get('/auth/google/callback', passport.authenticate('google'));

router.get('/api/currentuser', (req, res)=>{

  res.send(req.user)

})


router.get('/api/logout', (req, res)=>{

req.logout();

res.send(req.user);
  
})

module.exports = router