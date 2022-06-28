const { readdirSync } = require("fs"); 

module.exports = (client) => {
        const commands = readdirSync(`./src/commands/`).filter(file => file.endsWith(".js")); 
        for (let file of commands) { 
            let command = require(`../commands/${file}`); 
            if (command.name) { 
                client.annen.set(command.name, command); 
             console.log(`[SrâmtaN-COMMAND] ${command.name} Loaded!`);
                continue; 
            }
        }
}
