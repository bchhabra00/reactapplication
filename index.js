

const express = require('express');
const app = express();
const cookiesession = require('cookie-session')
const passport =require('passport')
const mongoose = require('mongoose');
const keys = require('./config/keys');


require('./models/users')
require('./services/passport');


mongoose.connect(keys.mongourl)

const index = require ('./routes/authroutes')


app.use(

  cookiesession({

    maxAge : 30 * 24 * 60 * 60 * 60,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());
app.use(index);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(`Server ready at: ${PORT}`)
});