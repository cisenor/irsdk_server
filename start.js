// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
    presets: [ 'env']
})

// Import the rest of our application.
module.exports = require('./irsdk_server.js')
module.exports = require("babel-jest").createTransformer({
    rootMode: "upward",
});
