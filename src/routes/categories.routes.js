import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import getListOfCategoriesController from "../controllers/categories/getListOfCategories.controller";
import getCategoryController from '../controllers/categories/getCategory.controller';
import editCategoryController from "../controllers/categories/editCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";

const categoriesRouter = Router();

categoriesRouter.post('', createCategoryController);
categoriesRouter.get('', getListOfCategoriesController);
categoriesRouter.get('/:id', getCategoryController);
categoriesRouter.patch('/:id', editCategoryController);
categoriesRouter.delete('/:id', deleteCategoryController);

export default categoriesRouter;