const {
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonStyle,
    ActionRowBuilder,
    ButtonBuilder,
} = require("discord.js");

const { botColor } = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Speed test"),
    execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setColor(botColor)
            .setDescription(`${client.ws.ping}ms`);
        interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
