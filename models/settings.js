'use strict'
module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define(
    'Settings',
    {
      msg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  )
  return Settings
}
