const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'onlineclothing',
    password: 'root',
    port: 5432,
  });

  module.exports = pool;