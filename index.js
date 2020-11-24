const Discord = require("discord.js");
const client = new Discord.Client();
console.log(process.env.PORT);
.listen(process.env.PORT || 5001);
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