

// what set of credentials to return

if(process.env.NODE_ENV === 'production'){

    // SET THE KEYS ACC TO PRODUC ENVIRONEMNT

    module.exports = require('./prod')
}
else{

    // keys acc to dev environment

    module.exports = require('./dev');
}