//require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
   connectionString: 'postgres://kwlandctxjltjh:208d2754278d3be0ade25a3576774a06a2f4b4eb6dd593c37d467fd2399d3f1c@ec2-44-198-82-71.compute-1.amazonaws.com:5432/d2m8mpue00ndih',
   //connectionString: process.env.DATABASE_URL,
   ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;