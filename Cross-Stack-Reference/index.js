'use strict';
console.log('____ Lambda Executing ____')

exports.handler = (event, context, callback) => {
    let min = 0;
    let max = 100;
    let randomNumber = Math.floor(Math.random() * max) + min
    callback(null, randomNumber);
};

