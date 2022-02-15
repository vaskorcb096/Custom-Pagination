module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      FullName: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
     
    });
    return User;
  };