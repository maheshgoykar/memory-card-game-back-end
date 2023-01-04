const mongoose = require('mongoose');

const leaderBoardSchema = new mongoose.Schema({
    email:String,
    name:String,
    lowScore:Number,
    time:String,
    countryEmoji:String,
})

const easyLeaderboard = mongoose.model('easyLeaderboard', leaderBoardSchema);

module.exports = easyLeaderboard;