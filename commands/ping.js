const { SlashCommandBuilder} = require('discord.js')

module.exports = {
	help: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Tester si le bot fonctionne.'),
	async execute(interaction) {
		await interaction.reply('e bot est actuellement en marche ! En cas de problème avec une commande, nous vous invitons à le signaler au staff.');
	},
};