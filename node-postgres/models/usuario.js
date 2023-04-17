module.exports = (sequelize, Sequelize) => {
    const usuario = sequelize.define("usuarios", {
      idusuario: {
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(40)
      },
      login: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(40)
      },
      senha: {
        type: Sequelize.STRING(32)
      },
      permissaonivel: {
        type: Sequelize.BLOB
      },
      datacadastro: {
        type: Sequelize.DATE
      },
      ultimologin:  {
        type: Sequelize.DATE
      }
    });
    return usuario;
  };