/*jshint esversion:6*/

'use strict';

module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    user_id: DataTypes.INTEGER,
    following_user_id: DataTypes.INTEGER
  }, {});
  follow.associate = function(models) {
    // associations can be defined here
    follow.hasOne (models.users, 
      {as:'user',foreignKey :'id'})
  };
  return follow;
};