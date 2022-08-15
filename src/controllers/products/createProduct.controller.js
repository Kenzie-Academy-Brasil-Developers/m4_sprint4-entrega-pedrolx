import createProductService from "../../services/products/createProduct.service";

const createProductController = async (request, response) => {
    try {
        const { name, price } = request.body;
        const createdProduct = await createProductService(name, price);
        return response.status(201).json(createdProduct)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default createProductController;