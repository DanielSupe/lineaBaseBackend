const express = require('express');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes);


db.sequelize.sync()
  .then(() => {
    console.log("Conectado a la base de datos. ✅ ✅ ✅ ");
  })
  .catch((err) => {
    console.error(" ❌❌❌ Error al conectar a la base de datos:", err);
  });


  app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  })