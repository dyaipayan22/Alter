import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../features/product/productApi';
import ProductCard from './cards/ProductCard';
import ProductCardSkeleton from './skeleton/ProductCardSkeleton';

const DisplayProducts = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, productError, search, sort } = useSelector(
    (state) => state.product
  );
  const page = 1;

  useEffect(() => {
    dispatch(fetchProducts({ page, search, sort }));
  }, [dispatch, search, sort]);

  return (
    <div className="w-full flex flex-col gap-4 lg:border-l border-l-background-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        {loading ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : allProducts && allProducts.products.length === 0 ? (
          <div>No items match your search</div>
        ) : (
          allProducts?.products.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayProducts;
