import database from "../../database";

const createProductService = async (name, price, category_id) => {
    try {
        const res = await database.query(`INSERT INTO products(name, price, category_id) VALUES($1, $2, $3) RETURNING *`, [name, price, category_id]);
        const product = {
            message: 'Product created',
            category: res.rows[0]
        }
        return product;
    } catch (error) {
        throw new Error(error)
    }
}

export default createProductService;