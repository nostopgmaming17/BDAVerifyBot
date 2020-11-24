const Discord = require("discord.js");
const express = require("express");
const client = new Discord.Client();
const app = express();

app.listen(process.env.PORT || 5000, () => {
    console.log("Listening to port " + process.env.PORT || 5000);
});
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