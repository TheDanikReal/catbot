const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env['token'],
prefix: "c?",
intents: ["GUILDS", "GUILD_MESSAGES"],
mobile: true
})

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

bot.variables({
updates: "Обновлений пока нету!"
})


//Replit thing so you can upload it to uptimerobot and get 24/7 (almost) uptime //
const express = require("express");
const path = require("path");
const app = express();


console.log("-------- Website --------");
app.get("/", (req, res) => {
  res.status(200).send("hi");
});
app.use("*", (req, res) => res.status(404).send({ status: 404, message: "Bruh i made only 1 site page, not many" }));
app.listen(process.env.PORT || 3000, () => console.log("Server succesfuly started on port 3000"));