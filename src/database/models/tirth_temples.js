import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class TirthTemple extends Model {
    static associate(models) {
      // Define associations if needed
    }
  }

  TirthTemple.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    destination_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    pin_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spiritual_significance: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timings: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    features: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    modelName: 'tirth_temples',
    tableName: 'tirth_temples',
    sequelize,
  });

  return TirthTemple;
}
