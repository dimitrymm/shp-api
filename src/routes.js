const { Router } = require("express");

const ProductsController = require("./app/controllers/ProductsController");
const CategoriesController = require("./app/controllers/CategoriesController");

const router = Router();

router.get("/products", ProductsController.index);
router.post("/products", ProductsController.store);
router.delete("/products/:id", ProductsController.delete);

router.get("/categories", CategoriesController.index);
router.post("/categories", CategoriesController.store);
router.delete("/categories/:id", CategoriesController.delete);

module.exports = router;
