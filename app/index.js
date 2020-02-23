require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.member.roles.find(r => r.name === 'BOT')) {
		message.channel.send('Shut the fuck up bot ' + message.member.user.tag);
	}
});

client.login('NjgwODY3NTAzNzQ3ODkxMjE1.XlGJSg.Fex3X38zDPBl6iCV6vxoikDyy14');
