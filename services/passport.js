

const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy

const keys = require('../config/keys')
const mongoose = require('mongoose');

const User = mongoose.model('users')

passport.serializeUser((user, done) =>{
   
    done(null, user.id);

})

passport.deserializeUser((id, done) =>{


    User.findById(id).then(user =>{
      
        done(null, user)

    })

})

const passportCode = passport.use(new GoogleStrategy(
    
    {
      clientID : keys.googleclientID,
      clientSecret: keys.googleclientSecret,
      callbackURL: '/auth/google/callback'

    }, 
    
    (accessToken, refreshToken, profile, done) => 
    
    {
        User.findOne({googleID : profile.id}).then(existinguser =>{
           if(existinguser){
             done(null, existinguser)
           }
           else{


            new User({
            
                googleID : profile.id,
                name: profile.displayName
            
            }).save().then(user => {
                
                done(null,user)
            })

           }

           

        })

      
        

    }

)
)
