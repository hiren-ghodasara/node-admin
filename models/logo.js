'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Logo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Categories, { foreignKey: 'category_id' })
      this.belongsTo(models.CardImage, { foreignKey: 'card_id' })
    }
  }
  Logo.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
      },
      card_id: {
        type: DataTypes.INTEGER,
      },
      images: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Logo',
    }
  )
  return Logo
}
