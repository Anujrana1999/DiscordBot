import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on('messageCreate', message => {
    if (message.author.bot) return;
    message.reply({
        content: "Hello from bot!"
    })
})

client.login('MTE5MDk3ODI4NjcyMTk3NDQzMw.GPGqJY.a89K0g9UQLW6aOneO7W0YSP_-emg0lycNI7t0Q')