export const up = (queryInterface, Sequelize) => queryInterface.createTable('tirth_destination', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING(256),
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT('long'),
    },
    state: {
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    spiritual_significance: {
      allowNull: false,
      type: Sequelize.TEXT('long'),
    },
    district: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    region: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    nature_surrounding: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    popular_destination: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
  
  export const down = (queryInterface) => queryInterface.dropTable('tirth_destination');
  