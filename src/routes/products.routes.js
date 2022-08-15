import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import listOneProductController from "../controllers/products/listOneProduct.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import editProductController from '../controllers/products/editProduct.controller';
import deleteProductController from "../controllers/products/deleteProduct.controller";
import filterProductsController from '../controllers/products/filterProducts.controller';

const productsRouter = Router();

productsRouter.post('', createProductController);
productsRouter.get('', listProductsController);
productsRouter.get('/:id', listOneProductController);
productsRouter.patch('/:id', editProductController);
productsRouter.delete('/:id', deleteProductController);
productsRouter.get('/category/:id', filterProductsController);

export default productsRouter;