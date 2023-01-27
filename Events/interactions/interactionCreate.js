const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");
const { botColor, botWebsite } = require('../../config.json');

module.exports = {
    name: "interactionCreate",

    execute(interaction, client) {
        const { customId } = interaction;
        
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) {
                interaction.reply({ content: "outdated command" });
            }
            command.execute(interaction, client);
        } else if (interaction.isButton()) {
            const embed = new EmbedBuilder()
                .setDescription(`You clicked the ${customId} button.`)

            interaction.reply({
                embeds: [embed]
            });
        }
    },
};
