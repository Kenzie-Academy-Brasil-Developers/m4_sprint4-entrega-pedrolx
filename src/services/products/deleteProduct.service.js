import database from "../../database";

const deleteProductService = async (id) => {
    try {
        const exist = await database.query(`SELECT * FROM products WHERE products.id = $1`, [id]);

        if(exist.rows.length == 0) {
            return {
                message: 'Product not found',
                statusCode: 404
            }
        }

        const res = await database.query(`DELETE FROM products WHERE products.id = $1`, [id]);
        return {
            message: '',
            statusCode: 204
        };
    } catch (error) {
        throw new Error(error);
    }
}

export default deleteProductService;