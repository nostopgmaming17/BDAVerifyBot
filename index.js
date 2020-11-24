const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log(client.user.username + " Is online!")
})


client.login(process.env.token);