import database from "../../database";

const editProductService = async (name, price, id) => {
    try {
        if (price === undefined) {
            const res = await database.query(`UPDATE products SET name = $1 WHERE products.id = $2 RETURNING *`, [name, id])
            const productUpdated = {
                message: 'Product Updated',
                product: {
                    id: res.rows[0].id,
                    name: res.rows[0].name,
                    price: res.rows[0].price
                }
            }
            return productUpdated;
        }
        const res = await database.query(`UPDATE products SET name = $1 price = $2 WHERE products.id = $3 RETURNING *`, [name, price, id])
        const productUpdated = {
            message: 'Product Updated',
            product: {
                id: res.rows[0].id,
                name: res.rows[0].name,
                price: res.rows[0].price
            }
        }
        return productUpdated;
    } catch (error) {
        throw new Error(error);
    }
}

export default editProductService;