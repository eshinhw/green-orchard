import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [], // list of all the products and quantities
  product: {}, // the product which is selected
  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => {
      return { ...state, product: newProduct };
    });
  },
  openModal: false,
  setOpenModal: () => {
    set((state) => {
      return { ...state, openModal: !state.openModal };
    });
  },
  addItem: (params) => {
    const { newItem } = params;

    set((state) => {
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    }); // set method receives the current state and return the new state
  },
  removeItem: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return { ...state, cart: newCart };
    });
  },
  emptyCart: () => {
    set((state: any) => {
      const newCart = [];
      return { ...state, cart: newCart };
    });
  },
}));

export default useCart;
