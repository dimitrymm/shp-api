const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "root",
    password: "root",
    database: "shopdimy",
});

client.connect((error) => {
    if (error) throw error;
    console.log("Connect successfuly!");
});

exports.query = async (query, values) => {
    const { rows } = await client.query(query, values);
    return rows;
};
