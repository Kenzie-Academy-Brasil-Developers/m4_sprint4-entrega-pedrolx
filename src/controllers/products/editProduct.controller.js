import editProductService from "../../services/products/editProduct.service";

const editProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, price, category_id } = request.body;
    const editedProduct = await editProductService(name, price, category_id, id);
    return response.status(200).json(editedProduct);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default editProductController;
