import tmi from 'tmi.js';
import { copy } from "https://deno.land/x/clipboard/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Load configuration
const env = config();

// Clean clipboard
await copy('');

// Configuración del cliente de Twitch
const client = new tmi.Client({
    identity: {
        username: 'tarravento',
        password: `oauth:${ env.ACCESS_TOKEN }`
    },
    channels: [env.CHANNEL]
});

// Conectarse a Twitch
client.connect();

// Evento cuando el bot se conecta correctamente
client.on('connected', (addr, port) => {
    console.log(`Conectado a ${addr}:${port}`);
});

// Evento para recibir mensajes del chat
client.on('message', async (channel, tags, message, self) => {
  if (tags['username'] === env.CHANNEL) {
    console.log(message);
    await copy(message);
  }
});
