import { create } from "zustand";

interface ProductState {
  selectedProduct: any | null;
  setSelectedProduct: (product: any) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));
