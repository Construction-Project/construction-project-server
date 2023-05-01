const {Sequelize} = require('sequelize');
const {sequelize} = require('./sequelize');
const {applyExtraSetUp} = require('./extra-setup');

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.initiator = require('./initiator')
db.project=require('./project')
db.request=require('./request')
db.request_with_initiator=require('./request_with_initiator')
db.status=require('./status')
db.picture=require('./picture')
db.city=require('./city')
db.opinion=require('./opinion')
db.user=require('./user')

applyExtraSetUp();
// alter: true  
//db.sequelize.sync({ force: true })
db.sequelize.sync({  alter: true })

.then(() => {
console.log('yes re-sync done!')
})
module.exports = db