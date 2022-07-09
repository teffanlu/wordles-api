//require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
    max: 20,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;