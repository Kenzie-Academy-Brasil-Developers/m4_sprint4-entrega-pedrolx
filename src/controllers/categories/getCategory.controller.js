import getCategoryService from "../../services/categories/getCategory.service";

const getCategoryController = async (request, response) => {
    try {
        const { id } = request.params;
        const category = await getCategoryService(id);
        return response.status(200).json(category);
    } catch (error) {
        return response.status(400).json({message: error.message})
    }
}

export default getCategoryController;