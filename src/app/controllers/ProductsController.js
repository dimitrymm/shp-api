const ProductsRepository = require("../repositories/ProductsRepository");

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
        const product = await ProductsRepository.create({
            name,
            date,
            quantity,
            category_id,
        });

        response.json(product);
    }
    update() {}
    async delete(request, response) {
        const { id } = request.params;
        await ProductsRepository.delete(id);

        response.sendStatus(204);
    }
}
module.exports = new ProductsController();
