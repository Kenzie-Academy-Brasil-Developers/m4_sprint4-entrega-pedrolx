import database from "../../database";

const deleteCategoryService = async (id) => {
    try {
        const res = await database.query(`DELETE FROM categories WHERE categories.id = $1`, [id]);
        return `Product deleted.`;
    } catch (error) {
        throw new Error(error);
    }
}

export default deleteCategoryService;