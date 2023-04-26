const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");
const { translate } = require("./src/commands/translate.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  message.getChat().then((res) => {
    if (res.name === "🇺🇸 Aprendiendo Ingles 🇬🇧") {
      if (message.body.startsWith("/translate")) {
        translate(message.body).then((result) =>
          message.reply(`Bot Translation: *${result}*`)
        );
      }
    }
  });
});

client.on("message_create", (message) => {
  message.getChat().then((res) => {
    if (res.name === "🇺🇸 Aprendiendo Ingles 🇬🇧") {
      if (message.body.startsWith("/translate")) {
        translate(message.body).then((result) =>
          message.reply(`Bot Translation: *${result}*`)
        );
      }
    }
  });
});

client.initialize();
