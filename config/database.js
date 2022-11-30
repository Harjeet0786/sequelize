const Sequalize = require("sequelize");

const DataTypes = require("sequelize");

var sequalize = new Sequalize("sql1", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
  pool: { max: 5, min: 0, idel: 10000 },
});
sequalize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error" + err);
  });

const db = {};
db.sequalize = sequalize;
db.Sequalize = Sequalize;


//db.users = require("./users")(sequalize, DataTypes);
db.sequalize.sync({ force: true }).then(() => {
  //db.sequalize.sync({ force: true ,match:/databasename$/ or different give then not drop a data}).then(() => {
  console.log("yes re-sync");
});
module.exports = db;
