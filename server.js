const { app } = require("./app");

// utils
const { db } = require("./utils/database.util");

//autencicación de DB
db.authenticate()
    .then(() => console.log("database authenticate"))
    .catch((err) => console.log(err));

// Sincronizar modelo, si no existe lo crea en la Dase de datos
db.sync()
    .then(() => console.log("Db synced"))
    .catch((err) => console.log(err));

//Server listen
app.listen(5000, () => {
    console.log("express app running");
});
