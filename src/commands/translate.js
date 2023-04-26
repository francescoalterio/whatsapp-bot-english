const { Translate } = require("../services/Translate.js");

async function translate(command) {
  const textToTaduce = command.replace("/translate ", "");
  const result = await Translate(textToTaduce);
  return result;
}

module.exports = {
  translate,
};
