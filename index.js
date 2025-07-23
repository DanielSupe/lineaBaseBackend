const express = require('express');
const db = require('./models');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.use("/api/users", userRoutes);
app.use("/api/auth", require('./container').authRoutes);


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