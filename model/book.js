
module.exports = (sequelize , DataTypes) => {
    const BookModel = sequelize.define("Book", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        title: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        year:{
            type:DataTypes.INTEGER  ,
            allowNull: false,
        },
        Isbn:{
            type:DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "Books"
    })

     return BookModel
}