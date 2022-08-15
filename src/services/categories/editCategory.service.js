import database from "../../database";

const editCategoryService = async (id, name) => {
    try {
        const res = await database.query(`UPDATE categories SET name = $2 WHERE categories.id = $1 RETURNING *  `, [id, name]);
        const response = {
          message: "Category Updated",
          category: {
            id: res.rows[0].id,
            name: res.rows[0].name
          }
        }
        return response;
    } catch (error) {
        throw new Error(error)
    }
}

export default editCategoryService;