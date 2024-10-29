const ProductsRepository = require("../repositories/ProductsRepository");
const isValidUUID = require("../utils/isValidUUID");

class ProductsController {
    async index(request, response) {
        const product = await ProductsRepository.findAll();
        response.json(product);
    }
    show() {}

    async store(request, response) {
        const { name, date, quantity, category_id } = request.body;

        if (!name) {
            return response.status(400).json({ error: "Name is Required!" });
        }
        if (category_id && !isValidUUID(category_id)) {
            return response.status(400).json({ error: "Invalid Category" });
        }
        const product = await ProductsRepository.create({
            name,
            date,
            quantity,
            category_id,
        });

        response.status(201).json(product);
    }
    update() {}
    async delete(request, response) {
        const { id } = request.params;
        await ProductsRepository.delete(id);

        response.sendStatus(204);
    }
}
module.exports = new ProductsController();
