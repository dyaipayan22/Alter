import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../features/product/productApi';
import ProductCard from './cards/ProductCard';

const DisplayProducts = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, productError, search, sort } = useSelector(
    (state) => state.product
  );
  const page = 1;

  useEffect(() => {
    dispatch(fetchProducts({ page, search, sort }));
  }, [dispatch, search, sort]);

  if (loading) {
    return <div className="text-4xl">Loading</div>;
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {allProducts &&
          allProducts?.products.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
