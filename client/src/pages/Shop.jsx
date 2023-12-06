import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../features/product/productSlice';
import ProductCard from '../components/cards/ProductCard';
import FilterSection from '../components/FilterSection';

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
    <div className="w-full flex gap-6">
      <FilterSection />
      <div className="grow bg-blue-200 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <span>12 results</span>
          <span>Sort</span>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products &&
            products?.map((item) => <ProductCard key={item._id} {...item} />)}
        </div> */}
      </div>
    </div>
  );
};

export default Shop;
