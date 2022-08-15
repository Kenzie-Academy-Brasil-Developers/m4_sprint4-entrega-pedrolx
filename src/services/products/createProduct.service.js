import database from "../../database";

const createProductService = async (name, price) => {
    try {
        const res = await database.query(`INSERT INTO products(name, price) VALUES($1, $2) RETURNING *`, [name, price]);
        const product = {
            message: 'Product created',
            product: {
                id: res.rows[0].id,
                name: res.rows[0].name,
                price: res.rows[0].price,
                category_id: res.rows[0].category_id
            }
        }
        return product;
    } catch (error) {
        throw new Error(error)
    }
}

export default createProductService;