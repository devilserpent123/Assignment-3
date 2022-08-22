import create from "zustand";
import { ProductFnStore } from "./Components/types";

const ProductStore = create<ProductFnStore>((set) => ({
  cart:[],
  addToCart:(item) => {
    set((state) => ({ cart: [...state.cart , item]}))
  },
  }))

  export default ProductStore;