import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  reviewProduct,
} from './productApi';

const initialState = {
  allProducts: null,
  productInfo: null,
  search: '',
  sort: {},
  loading: false,
  productError: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectedProduct: (state, action) => {
      state.productInfo = action.payload;
    },
    searchProduct: (state, action) => {
      state.search = action.payload;
    },
    sortBy: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.productInfo = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.productError = action.payload;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.productError = action.payload;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.productError = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.productError = action.payload;
      })
      .addCase(reviewProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(reviewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
      })
      .addCase(reviewProduct.rejected, (state, action) => {
        state.loading = false;
        state.productError = action.payload;
      });
  },
});

export const { searchProduct, sortBy, selectedProduct } = productSlice.actions;

export default productSlice.reducer;
