const Pin = sequelize.define('pin', {
    'id': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'pin': Sequelize.STRING,
    'email': Sequelize.STRING,
    'isVerified': Sequelize.STRING,
    'count': {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    'createdAt': {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },    
    'updatedAt': {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    'expiredAt': {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },     
    
}, {
    //prevent sequelize transform table name into plural
    freezeTableName: true,
});