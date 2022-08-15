import database from "../../database";

const getCategoryService = async (id) => {
    try {
        const res = await database.query(`SELECT * FROM categories WHERE categories.id = $1`, [id]);
        return res.rows[0];
    } catch (error) {
        throw new Error(error)
    }
}

export default getCategoryService;