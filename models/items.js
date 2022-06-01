const initItemsModel = (sequelize, DataTypes) => {
    return sequelize.define(
        'items',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                allowNull: false,
                unique: true,
                type: DataTypes.STRING
            },
            userId: {
                allowNull: false,
                type: DataTypes.STRING,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        },
        {
            underscored: true
        }
    )
}

module.exports = initItemsModel