const db = require("../../database");

class ProductsRepository {
    async findAll() {
        const rows = await db.query(
            `SELECT products.*,categories.name AS category_name
        FROM products
        LEFT JOIN categories ON categories.id = products.category_id
        ORDER BY products.date
        `
        );
        return rows;
    }
    async create({ name, date, quantity, category_id }) {
        const [row] = await db.query(
            `
            INSERT INTO products (name,date,quantity,category_id)
            VALUES($1,$2,$3,$4)
            RETURNING *

            `,
            [name, date, quantity, category_id]
        );
    }
    async delete(id) {
        const deleteOp = await db.query(
            `
            DELETE FROM products
            WHERE id = $1
            `,
            [id]
        );
        return deleteOp;
    }
}
module.exports = new ProductsRepository();
