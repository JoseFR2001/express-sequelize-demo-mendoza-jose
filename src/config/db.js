import sequelize from "./database.js";

const initDB = async()=>{
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida");
    await sequelize.sync();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

export default initDB;