'use strict';
module.exports = function(sequelize, DataTypes) {
  var songs = sequelize.define('songs', {
    songid: DataTypes.INTEGER,
    genre: DataTypes.TEXT,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    avatar_url: DataTypes.TEXT,
    stream_url: DataTypes.TEXT,
    user: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return songs;
};