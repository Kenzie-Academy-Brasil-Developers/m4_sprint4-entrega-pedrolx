import database from "../../database";

const listOneProductService = async (id) => {
    try {
        const res = await database.query(`SELECT * FROM products WHERE products.id = $1`, [id]);
        return res.rows[0];
    } catch (error) {
        throw new Error(error);
    }
}

export default listOneProductService;