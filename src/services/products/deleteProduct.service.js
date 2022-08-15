import database from "../../database";

const deleteProductService = async (id) => {
    try {
        const res = await database.query(`DELETE FROM products WHERE products.id = $1`, [id]);
        return `Product deleted.`
    } catch (error) {
        throw new Error(error);
    }
}

export default deleteProductService;