export const up = (queryInterface, Sequelize) => queryInterface.createTable('tirth_temples', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    city: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    state: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    district: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    address: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    destination_id: {
      allowNull: false,
      type: Sequelize.BIGINT,
      references: {
        model: 'tirth_destination',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    pin_code: {
      allowNull: false,
      type: Sequelize.STRING(10),
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    spiritual_significance: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    timings: {
      allowNull: true,
      type: Sequelize.STRING(255),
    },
    features: {
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
  
  export const down = (queryInterface) => queryInterface.dropTable('tirth_temples');
  