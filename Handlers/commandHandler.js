//get time local
const time = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
});

function loadCommands(client) {
    const ascii = require("ascii-table");
    const fs = require("fs");
    const table = new ascii().setHeading("Commands", "Status");

    let commandsArray = [];

    const commandsFolder = fs.readdirSync("./Commands");
    for (const folder of commandsFolder) {
        const commandFiles = fs
            .readdirSync(`./Commands/${folder}`)
            .filter((file) => file.endsWith(".js"));

        for (const file of commandFiles) {
            const commandFile = require(`../Commands/${folder}/${file}`);

            const properties = { folder, ...commandFile };
            client.commands.set(commandFile.data.name, properties);

            commandsArray.push(commandFile.data.toJSON());

            table.addRow(file, "✅");
            continue;
        }
    }

    client.application.commands.set(commandsArray);

    return console.log(table.toString(), `\n${time} | Loaded Commands`);
}

module.exports = { loadCommands };
