const { Pool } = require('pg');
const {config} = require('../config/dbConfig.js')
const pool = new Pool(config);
const query = (text, params) => pool.query(text, params);

module.exports = { query };
