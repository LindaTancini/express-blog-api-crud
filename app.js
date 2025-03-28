// IMPORTO EXPRESS
const express = require("express");
// CREO APP INVOCANDO EXPRESS
const app = express();
// DEFINISCO LA PORTA
const port = 3000;

// AVVIO IL SERVER SULLA PORTA 3000 E CONTROLLO SU POSTMAN
app.listen(port, () => {
  console.log(`Sono un server attivo sulla porta:${port}`);
});
