const DataTypes = require('sequelize');
const { sequelize } = require('../database/index.js');

exports.Video = sequelize.define(
  'video',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    publishing_datetime: {
      type: DataTypes.DATE,
    },
    thumbnail_url: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
