import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Video = sequelize.define(
  'video',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tittle: {
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
