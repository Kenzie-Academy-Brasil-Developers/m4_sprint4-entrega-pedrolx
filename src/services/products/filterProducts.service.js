import database from "../../database";

const filterProductsService = async (id) => {
  try {
    const res = await database.query(
      `SELECT * FROM products WHERE products.category_id = $1`,
      [id]
    );
    const response = res.rows.map((elem) => {
      return {
        id: elem.id,
        name: elem.name,
        price: elem.price,
        category: elem.category_id,
      };
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default filterProductsService;
