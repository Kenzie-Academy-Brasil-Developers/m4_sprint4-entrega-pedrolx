import listOneProductService from '../../services/products/listOneProduct.service'

const listOneProductController = async (request, response) => {
    try {
        const { id } = request.params;
        const product = await listOneProductService(id);
        return response.status(200).json(product);
    } catch (error) {
        return response.status(400).json({ message: error.message });
    }
}

export default listOneProductController;