var players = require('./players');

players[0].name = '이성주';
players[1].name = '김성주';

players.forEach(function(value, index){
    console.log(index+1, value.name);
});

require('./lottery.js');

players.forEach(function(value, index){
    console.log(value.name, value.pick);
});