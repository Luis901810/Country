const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true}).then(() => {
server.listen(PORT, () => {
  console.log(`puerto escuchando en el: ${PORT}`);
})
}).catch(error => console.error(error))
