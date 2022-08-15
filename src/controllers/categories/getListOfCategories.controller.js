import getListOfCategoriesService from "../../services/categories/getListOfCategories.service"

const getListOfCategoriesController = async (request, response) => {
    try {
        const categories = await getListOfCategoriesService();
        return response.status(200).json(categories)
    } catch (error) {
        return response.status(400).json({message: error.message})
    }
}

export default getListOfCategoriesController;