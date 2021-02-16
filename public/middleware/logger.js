//Middleware functions (middleware funcitons have access to req and res)
var x = 0;
const logger = function(req,res,next){
    console.log(x);
    x += 1;
    next();
};

module.exports = logger;