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

bot.variables({
  updates: "Currently none!",
  owner: "802951312873750578"
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Commands/");

const panel = new Panel({
  username:["catbot_admin"],
  password: process.env['pass'],
  secret: require('crypto').randomBytes(16).toString("hex"),
  commands: "./Commands/",
  bot: bot,
  mainFile: "index.js",
  port: 3000
})

panel.loadPanel();