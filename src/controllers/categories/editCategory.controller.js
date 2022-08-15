import editCategoryService from "../../services/categories/editCategory.service";

const editCategoryController = async (request, response) => {
    try {
        const { id } = request.params;
        const { name } = request.body;
        const categoryEdited = await editCategoryService(id, name);
        return response.status(200).json(categoryEdited);
    } catch (error) {
        return response.status(400).json({message: error.message})
    }
}

export default editCategoryController;