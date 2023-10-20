import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [], // list of all the products and quantities
  product: {}, // the product which is selected
  setProduct: (params: any) => {
    const { newProduct } = params;
    set((state: any) => {
      return { ...state, product: newProduct };
    });
  },
  openModal: false,
  setOpenModal: () => {
    set((state: any) => {
      return { ...state, openModal: !state.openModal };
    });
  },
  addItem: (params: any) => {
    const { newItem } = params;
    console.log(newItem);
    set((state: any) => {
      // Check if newItem already exists in cart
      const foundIdx = state.cart.findIndex(
        (item: any) => item.id === newItem.id
      );
      if (foundIdx === -1) {
        const newCart = [...state.cart, newItem];
        return { ...state, cart: newCart };
      } else {
        state.cart[foundIdx].quantity =
          state.cart[foundIdx].quantity + newItem.quantity;
        return { ...state };
      }
    });
  },
  removeItem: (params: any) => {
    const { itemIndex } = params;
    set((state: any) => {
      const newCart = state.cart.filter(
        (element: any, elementIndex: number) => {
          return elementIndex !== itemIndex;
        }
      );
      return { ...state, cart: newCart };
    });
  },
  emptyCart: () => {
    set((state: any) => {
      const newCart: any = [];
      return { ...state, cart: newCart };
    });
  },
}));

export default useCart;
