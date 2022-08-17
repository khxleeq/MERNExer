const cows = require("cowsay");

// (text) => cows.say({'text': text}); 


module.exports.speak = (text) => cows.say({'text': text}); 
