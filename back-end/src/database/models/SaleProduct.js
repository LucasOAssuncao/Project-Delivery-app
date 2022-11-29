module.exports = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define(
      "SaleProduct",
      {
        saleId: { type: DataTypes.INTEGER, foreignKey: true },
        productId: { type: DataTypes.INTEGER, foreignKey: true },
        quantity: DataTypes.INTEGER,
      },
      {
        createdAt: false,
        timestamps: false,
        tableName: "salesProducts",
        underscored: true,
      }
    );
  
    SaleProduct.associate = (models) => {
        SaleProduct.belongsTo(models.Sale, {
        foreignKey: "saleId",
        as: "idSale",
      });
      SaleProduct.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "idProduct",
      });
    };
  
    return SaleProduct;
  };
  