module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true },
      deliveryAddres: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      createdAt: 'saleDate',
      timestamps: false,
      tableName: "sales",
      underscored: true,
    }
  );

  Sale.associate = (models) => {
    Sale.hasMany(models.SaleProduct, {
      foreignKey: 'id',
      as: 'product'
    })
  };


  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: "userId",
      as: "idUser",
    });
    Sale.belongsTo(models.User, {
      foreignKey: "sellerId",
      as: "idSeller",
    });
  };

  return Sale;
};
