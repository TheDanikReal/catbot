const aoijs = require("aoi.js")
const {Voice, LoadCommands, Bot } = require("aoi.js")
const {Panel} = require("@akarui/aoi.panel")

const bot = new aoijs.Bot({
token: process.env['token'],
prefix: "c?",
intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
mobile: true
})

const voice = new aoijs.Voice(
  bot,
  {
    cache: {
      cacheType: "Memory",//Disk
      enabled: true,
      //directory : "music", only for Disk type
    },
  playerOptions: {
    trackInfoInterval: 5000,
  },//optional
  },
  true, //to enable pruneMusic 
);

voice.onTrackStart();

bot.onMessage();
bot.command({
name: "ping",
code: `Pong! $pingms`
});
bot.status ({
 text: "Brawl Stars | c?help",
 type: "PLAYING",
 time: 10
})
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./Commands/")
loader.load(voice.cmd, "./Voice/"); //voice cmds

bot.variables({
updates: "Обновлений пока нету!"
})

//Replit thing so you can upload it to uptimerobot and get 24/7 (almost) uptime //


console.log("-------- Website --------");
const panel = new Panel({
    username: "TDR",//username for logging in
    password: process.env['pass'],//password for logging in
    secret: "aoijs",//session secret
    port: 3000,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
    commands: "./Commands/"// folder name in which all the edit needing files are there.
})
panel.loadPanel()//Load The Panel

panel.onError()