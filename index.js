const aoi = require("aoi.js")
const bot = new aoi.Bot({
     token: process.env.token,
     prefix: [c?]
});

bot.onMessage({
  guildOnly: false //make commands work in dms
});
bot.onMusicStart()
bot.musicStartCommand({
 channel: "$channelID", 
 code: `
 $color[RANDOM]
 $author[Now Playing]
 $description[Playing $songInfo[title]]`
});
bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description: I'm leaving the Voice Channel since no one is playing music anymore}{delete:5s};no]`
        });

bot.loadCommands('./Commmands/'); //command handler
bot.status ({
 text: "c?help",
 type: "LISTENING",
 time: 10
});
