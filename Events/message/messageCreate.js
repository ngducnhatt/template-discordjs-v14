const {
    EmbedBuilder,
    ButtonStyle,
    ActionRowBuilder,
    ButtonBuilder,
} = require("discord.js");
const { botId, botName, botAvatar, botWebsite, botColor } = require("../../config.json");

module.exports = {
    name: "messageCreate",

    execute(message) {
        if (!message.mentions.users.first()) return;
        if (message.mentions.users.first().id == `${botId}`) {
            const embed = new EmbedBuilder().setColor(botColor).setAuthor({
                name: `${botName}`,
                iconURL: `${botAvatar}`,
                url: `${botWebsite}`,
            }).setDescription(`
                    Thanks for using me 🤍 Have a nice day
                    /help | show all commands
                `);

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setLabel(`Up vote`)
                    .setStyle(ButtonStyle.Link)
                    .setEmoji("🤍")
                    .setURL(`${botWebsite}`)
            );
            message.reply({ embeds: [embed], components: [row] });
        }
    },
};
