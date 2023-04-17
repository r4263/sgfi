module.exports = {
    HOST: "localhost",
    PORT: "5432",
    USER: "defuser",
    PASSWORD: "teste",
    DB: "sgfidb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };