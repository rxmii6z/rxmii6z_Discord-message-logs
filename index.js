const Discord = require('discord.js');
const config = require('./config.json')
const fs = require('fs');
const client = new Discord.Client();

//Token à définir dans config.json
client.login(config.token)

client.on('ready', () => {
    console.log("Connectez en tant que " + client.user.tag)
});

client.on('message', message => {
    const d = message.createdAt;
    let date = d.getHours() + "h:" + d.getMinutes() + "m:" + d.getSeconds() + "s, " + d.toDateString();
    let logs_msg = date +  " [" + message.author.username + "] a envoyer: " + message.content;
    console.log(logs_msg + ('\n'))
    // Le "\n" sert à sauter une ligne pour que les messages ne s'aligne pas dans les logs
    fs.appendFileSync('data/msg_logs.txt', logs_msg + ('\n'))
});
