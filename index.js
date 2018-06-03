const Botkit = require('botkit');

/* eslint-disable camelcase */
const controller = Botkit.facebookbot({
	access_token: process.env.ACCESS_TOKEN,
	verify_token: process.env.VERIFY_TOKEN
});

const bot = controller.spawn({});

controller.setupWebserver(process.env.PORT, (err, webserver) => {
	controller.createWebhookEndpoints(webserver, bot, () => {
		console.log('Bot is up');
	});
});

controller.hears(['hello'], 'message_received', (bot, message) => {
	bot.reply(message, 'Hey there.');
});
