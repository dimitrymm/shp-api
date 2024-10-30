const { Client } = require("pg");

const client = new Client({
    connectionString: process.env.POSTGRES_URL,
});

// host: "localhost",
// port: 5432,
// user: "root",
// password: "root",
// database: "shopdimy",

client.connect();

exports.query = async (query, values) => {
    const { rows } = await client.query(query, values);
    return rows;
};
