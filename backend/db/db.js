const db = require("mongoose");

async function main() {
  await db.connect("mongodb://127.0.0.1:27017/mangex");
  console.log("Conectado ao banco");
}
main().catch((err) => { console.log(err); });

module.exports = db;