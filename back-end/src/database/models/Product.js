module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      urlImage: DataTypes.STRING,
    },
    {
      createdAt: false,
      timestamps: false,
      tableName: 'products',
      underscored: true,
    }
  );

  // Product.associate = (models) => {
  //   Product.hasMany(models.SaleProduct, {
  //     foreignKey: 'id',
  //     as: 'idProduct'
  //   })
  // };

  return Product;
};
