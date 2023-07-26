const {Panel} = require("@akarui/aoi.panel")
const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: process.env['token'],
    prefix: "c?",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/"
    }
});
/*

waiting for update of library 
*/
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Commands/");



const panel = new Panel({
  username:["TDR"],
  password:process.env['pass'],
  secret: require('crypto').randomBytes(16).toString("hex"),
  commands: "./Commands/",
  port:3000,
  bot: bot
})
/*
panel.loadAPI({
  auth: require('crypto').randomBytes(16).toString("hex")
})

panel.loadGUI({
  username:["TDR"],
  password:[process.env['pass']],
})
*/

/*


const aoijs = require("aoi.js");
const {LoadCommands, Bot } = require("aoi.js");
const {Panel} = require("@akarui/aoi.panel");

const bot = new aoijs.Bot({
token: process.env['token'],
prefix: "c?",
intents: ["GUILDS", "GUILDMESSAGES", "GUILDVOICESTATES", "MESSAGECONTENT"],
mobile: true
});

voice.onTrackStart();

bot.onJoin();
bot.onMessage();

bot.command({
name: "ping",
code: `Pong! $pingms`
});

bot.status ({
 text: "c?help",
 type: "PLAYING",
 time: 10
});

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./Commands/")

bot.variables({
updates: "Обновлений пока нету!",
enabledwelcomer: false,
});

console.log("-------- Website --------");
const panel = new Panel({
    username: "TDR",//username for logging in
    password: process.env['pass'],//password for logging in
    secret: require('crypto').randomBytes(16).toString("hex"),
    port: 3000,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
    commands: "./Commands/"// folder name in which all the edit needing files are there.
});
panel.loadPanel();//Load The Panel

panel.onError();

redoing everything from scratch
*/