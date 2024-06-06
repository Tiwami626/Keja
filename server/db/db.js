const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Wanpisu@2024",
    host: "localhost",
    port: 5432,
    database: "keja_hosts"
})

module.exports = pool;