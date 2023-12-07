import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useWatch } from 'react-hook-form';

import { fetchProducts } from '../features/product/productApi';
import ProductCard from './cards/ProductCard';
import Select from './ui/Select';

const DisplayProducts = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, productError } = useSelector(
    (state) => state.product
  );

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      page: 1,
      search: '',
      sort: '',
    },
  });

  const page = 1;
  const search = '';
  const sort = '';

  useEffect(() => {
    dispatch(fetchProducts({ page, search, sort }));
  }, [dispatch]);

  if (loading) {
    return <div className="text-4xl">Loading</div>;
  }

  const options = [
    { value: 'price:asc', label: 'Price (low to high)' },
    { value: 'price:desc', label: 'Price (high to low)' },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md flex items-center justify-between">
        {/* <span className="text-xl">{allProducts.results}</span> */}
        <Select id="sort" options={options} register={register} />
        <button onSubmit={handleSubmit(onSubmit)}>Submit</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {allProducts &&
          allProducts?.products.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
      </div>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </div>
  );
};

export default DisplayProducts;
