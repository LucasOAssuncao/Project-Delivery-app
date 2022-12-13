module.exports = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define(
      "SaleProduct",
      {
        saleId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
        productId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
        quantity: DataTypes.INTEGER,
      },
      {
        createdAt: false,
        timestamps: false,
        tableName: "sales_products",
        underscored: true,
      }
    );
  
    SaleProduct.associate = (models) => {
      models.Product.belongsToMany(models.Sale, {
        as: "sales",
        through: SaleProduct,
        foreignKey: "productId",
        otherKey: "saleId"
      });
      models.Sale.belongsToMany(models.Product, {
        as: "products",
        through: SaleProduct,
        foreignKey: "saleId",
        otherKey: "productId"
      });
    };
  
    return SaleProduct;
  };
  