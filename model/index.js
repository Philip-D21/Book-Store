const { Sequelize , DataTypes } = require('sequelize');
const CONFIG = require("../CONFIG/db_config");
const BookModel = require("./book");


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    CONFIG.DB_NAME,
    CONFIG.DB_USER,
    CONFIG.DB_PASSWORD,
    {
        host: CONFIG.DB_HOST,
        dialect: CONFIG.DB_DIALECT
    }
)


sequelize.authenticate()
    .then(()=>{
        console.log("Connection succesful")
    }).catch((err) =>{
        console.log("unable to sync successfully:"+ err)
    })


const db =[]

db.sequelize = sequelize
db.Sequelize = Sequelize

//add our model
db.books = BookModel(sequelize, DataTypes)



db.sequelize.sync({ false: true })
.then(()=>{
    console.log("Table synced sccessfully")
}).catch((err)=>{
    console.log("unable to sync successfully:"+ err)
})

module.exports = db