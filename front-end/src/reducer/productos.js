const reducer = (state = [], action) => {
  switch (action.type) {
    case "@productos/buscar":
      const { productos, palabra } = action.payload;
      const regExp = new RegExp(`.*${palabra}.*`, "gi");
      return productos.filter(
        ({ title, price, description }) =>
          title.match(regExp) ||
          price.match(regExp) ||
          description.match(regExp)
      );

    default:
      return state;
  }
};

export default reducer;
