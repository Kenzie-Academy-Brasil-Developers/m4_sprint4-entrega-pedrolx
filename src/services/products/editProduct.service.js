import database from "../../database";

const editProductService = async (name, price, category_id, id) => {
    try {
        const res = await database.query(`UPDATE products SET name = $1, price = $2, category_id = $3 WHERE products.id = $4 RETURNING *`, [name, price, category_id, id])
        // if(!res.rows[0].name) {
        //     throw new Error("Category or product id not found")
        // }
        const productUpdated = {
            message: 'Product Updated',
            product: {
                name: res.rows[0].name,
                price: res.rows[0].price,
                category_id: res.rows[0].category_id
            }
        }
        return productUpdated;
    } catch (error) {
        throw new Error(error);
    }
}

export default editProductService;