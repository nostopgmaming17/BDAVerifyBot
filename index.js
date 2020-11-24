const Discord = require("discord.js");
const express = require("express");

const client = new Discord.Client();
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("App is running on port ${ PORT }");
});
app.get('/', (req, res) => {
    return res.sendStatus(200);
})
client.on("ready", () => {
    console.log(client.user.username + " Is online!")
});

client.on("message", msg => {
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() == "ping")
    {
        msg.reply("pong");
    };
});
client.login(process.env.token);