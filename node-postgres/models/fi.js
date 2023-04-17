module.exports = (sequelize, Sequelize) => {
    const fi = sequelize.define("fis", {
      idfi: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.BOOLEAN
      },
      nome: {
        type: Sequelize.STRING(50)
      },
      fabricante: {
        type: Sequelize.STRING(30)
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      barcode: {
        type: Sequelize.STRING(13)
      }
    });
    return fi;
  };