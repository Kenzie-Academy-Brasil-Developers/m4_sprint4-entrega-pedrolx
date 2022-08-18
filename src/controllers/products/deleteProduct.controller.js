import deleteProductService from '../../services/products/deleteProduct.service';

const deleteProductController = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await deleteProductService(id);
        return response.status(deleted.statusCode).json(deleted.message);
    } catch (error) {
        return response.status(400).json({message: error.message})
    }
}

export default deleteProductController;