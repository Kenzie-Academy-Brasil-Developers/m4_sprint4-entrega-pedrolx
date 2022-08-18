import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await deleteCategoryService(id);
        return response.status(deleted.statusCode).json(deleted.message);
    } catch (error) {
        return response.status(400).json({message: error.message});
    }
}

export default deleteCategoryController;