import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../features/product/productSlice';
import ProductCard from '../components/cards/ProductCard';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const { products, loading, isError } = useSelector((state) => state.product);

  if (loading) {
    return <div className="text-7xl">Loading</div>;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products &&
          products?.map((item) => <ProductCard key={item._id} {...item} />)}
      </div>
    </div>
  );
};

export default Shop;