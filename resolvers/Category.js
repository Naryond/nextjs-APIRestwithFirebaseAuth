exports.Category = {
  products: ({ id: categoryId }, args, { products }) => {
    return products.filter((product) => product.categoryId === categoryId);
  },
};
