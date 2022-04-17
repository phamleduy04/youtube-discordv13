const Keyv = require('keyv');
require('dotenv').config();
// link mongodb hoặc sqlite tại đây
const db = new Keyv(process.env.MONGODB || 'sqlite://database.sqlite');

module.exports = db;