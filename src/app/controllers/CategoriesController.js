const CategoriesRepository = require("../repositories/CategoriesRepository");

class CategoriesController {
    async index(request, response) {
        const categories = await CategoriesRepository.findALL();

        response.json(categories);
    }

    async store(request, response) {
        const { name } = request.body;
        const category = await CategoriesRepository.create({ name });

        response.json(category);
    }
    async update(request, response) {}
    async delete(request, response) {
        const { id } = request.params;

        await CategoriesRepository.delete(id);

        response.sendStatus(204);
    }
}

module.exports = new CategoriesController();
