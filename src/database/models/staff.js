module.exports = function (sequelize, DataTypes) {
  const Staff = sequelize.define(
    'staff',
    {
      staffId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'staff',
    }
  );

  Staff.associate = (models) => {
    Staff.belongsTo(models.salon, {
      onDelete: 'CASCADE',
      foreignKey: 'salonId',
    });
  };

  return Staff;
};
