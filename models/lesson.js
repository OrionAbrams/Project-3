module.exports = function (sequelize, DataTypes) {
  var Lesson = sequelize.define("Lesson", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lessonContent: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    test: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Lesson.associate = function (models) {
    Lesson.belongsTo(models.Class, {
      foreignKey: {
        allowNull: false
      }
    }),
      Lesson.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        },
      });
  }
  return Lesson;
};