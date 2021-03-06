module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'hashtag',
        {
            title: {
                type: DataTypes.STRING(15),
                allowNull: false,
                unique: true,
            },
        },
        {
            timestamps: true,
            paranoid: true,
            underscored: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );
};
