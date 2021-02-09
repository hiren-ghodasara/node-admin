'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CardImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Categories, { foreignKey: 'category_id' })
    }
  }
  CardImage.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
      },
      images: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'CardImage',
    }
  )
  return CardImage
}
