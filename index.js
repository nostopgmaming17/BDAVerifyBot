const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log(client.user.username + " Is online!")
})

console.log(process.env.token);
//client.login(process.env.token);