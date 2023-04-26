function Translate(text) {
  return fetch("https://rapid-translate-multi-traduction.p.rapidapi.com/t", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "1406420e51mshe52a0be33909203p18c65djsn99214a34bb64",
      "X-RapidAPI-Host": "rapid-translate-multi-traduction.p.rapidapi.com",
    },
    body: JSON.stringify({
      from: "en",
      to: "es",
      q: text,
    }),
  }).then((res) => res.json());
}

module.exports = {
  Translate,
};
