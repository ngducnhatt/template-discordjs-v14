const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");
const { botColor, botWebsite } = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("button")
        .setDescription("button"),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(botColor)
            .setDescription("Click to see the magic!")

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("danger")
                    .setLabel(`Danger Button`)
                    .setStyle(ButtonStyle.Danger)
                    .setEmoji("🟠"),
                new ButtonBuilder()
                    .setCustomId("primary")
                    .setLabel(`Primary Button`)
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji("🔵"),
                new ButtonBuilder()
                    .setCustomId("secondary")
                    .setLabel(`Secondary Button`)
                    .setStyle(ButtonStyle.Secondary)
                    .setEmoji("⚫"),
                new ButtonBuilder()
                    .setCustomId("success")
                    .setLabel(`Success Button`)
                    .setStyle(ButtonStyle.Success)
                    .setEmoji("🟢"),
                new ButtonBuilder()
                    .setLabel(`Link Button`)
                    .setStyle(ButtonStyle.Link)
                    .setEmoji("⚪")
                    .setURL(`${botWebsite}`),
            );

        interaction.reply({
            embeds: [embed],
            components: [row],
        });
        
    },
};
// const row = new ActionRowBuilder()
//     .addComponents(
//     new ButtonBuilder()
//         .setLabel(`Danger Button`)
//         .setStyle(ButtonStyle.Danger)
//         .setEmoji("🔴"),
//     new ButtonBuilder()
//         .setLabel(`Link Button`)
//         .setStyle(ButtonStyle.Link)
//         .setEmoji("⚪")
//         .setURL(`${botWebsite}`),
//     new ButtonBuilder()
//         .setLabel(`Primary Button`)
//         .setStyle(ButtonStyle.Primary)
//         .setEmoji("🔵"),
//     new ButtonBuilder()
//         .setLabel(`Secondary Button`)
//         .setStyle(ButtonStyle.Secondary)
//         .setEmoji("⚫"),
//     new ButtonBuilder()
//         .setLabel(`Success Button`)
//         .setStyle(ButtonStyle.Success)
//         .setEmoji("🟢")
// );
