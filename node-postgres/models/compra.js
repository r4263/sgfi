module.exports = (sequelize, Sequelize) => {
    const compra = sequelize.define("compras", {
      idcompra: {
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valorunidade: {
        type: Sequelize.FLOAT
      },
      data: {
        type: Sequelize.DATE
      }
    });
    return compra;
  };