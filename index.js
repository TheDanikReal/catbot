const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env['token'],
prefix: "c?",
intents: ["GUILDS", "GUILD_MESSAGES"]
})
bot.onMessage();
bot.command({
name: "ping",
code: `Pong! $pingms`
});
bot.status ({
 text: "c?help",
 type: "LISTENING",
 time: 10
})
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./Commands/")