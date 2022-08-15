import filterProductsService from "../../services/products/filterProducts.service";

const filterProductsController = async (request, response) => {
    try {
        const { id } = request.params;
        const products = await filterProductsService(id);
        return response.status(200).json(products);
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default filterProductsController;