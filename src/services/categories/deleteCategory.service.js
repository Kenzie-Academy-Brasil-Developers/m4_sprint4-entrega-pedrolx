import database from "../../database";

const deleteCategoryService = async (id) => {
  try {

    const exist = await database.query(`SELECT * FROM categories WHERE categories.id = $1`, [id]);

    if(exist.rows.length == 0) {
        return {
            message: 'Category not found',
            statusCode: 404
        }
    }

    const res = await database.query(
      `DELETE FROM categories WHERE categories.id = $1 RETURNING *`,
      [id]
    );

    return {
        message: '',
        statusCode: 204
    };
    
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategoryService;
