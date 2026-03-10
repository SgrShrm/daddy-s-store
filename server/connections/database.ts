const { Sequelize,DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5436/postgres')

const checkDBconnection = async () => {
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

export default checkDBconnection;