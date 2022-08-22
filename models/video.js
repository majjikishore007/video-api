const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Video = sequelize.define('Video', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishingDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Video;
