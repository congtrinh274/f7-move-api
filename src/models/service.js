"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Service extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Service.belongsTo(models.Partner, { foreignKey: "partnerId" });
            Service.hasMany(models.detailService, { foreignKey: "serviceId" });
        }
    }
    Service.init(
        {
            partnerId: DataTypes.STRING,
            detailServiceId: DataTypes.STRING,
            nameService: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Service",
        }
    );
    return Service;
};
