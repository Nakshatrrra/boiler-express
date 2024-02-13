import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class TirthDestination extends Model {
    static associate(models) {
      // Define associations if needed
    }
  }

  TirthDestination.init({
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    spiritual_significance: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    district: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nature_surrounding: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    popular_destination: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    modelName: 'tirth_destination',
    tableName: 'tirth_destination',
    sequelize,
  });

  return TirthDestination;
}
