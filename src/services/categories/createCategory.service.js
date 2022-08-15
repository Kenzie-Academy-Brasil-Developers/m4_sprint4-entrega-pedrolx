import database from '../../database';

const createCategoryService = async (name) => {
    try {
        const res = await database.query(
            `INSERT INTO categories(name) VALUES($1) RETURNING *`, [name]
        )
        const message = {
            message: 'Category created',
            category: {
                id: res.rows[0].id,
                name: res.rows[0].name
            }
        }
        return message;
    } catch (error) {
        throw new Error(error);
    }

}

export default createCategoryService;