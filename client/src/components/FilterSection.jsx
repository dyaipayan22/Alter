import { useDispatch } from 'react-redux';

import { sortBy } from '../features/product/productSlice';
import Select from './ui/Select';

const options = [
  { value: 'price:asc', label: 'Price: Low to High' },
  { value: 'price:desc', label: 'Price: High to Low' },
];

const FilterSection = () => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    const value = e.target.value;
    dispatch(sortBy(value));
  };

  return (
    <div className="bg-background-100 flex flex-col gap-4 border-r-[3px] border-r-background-300 p-4 rounded-md shadow-md text-text-200">
      <span className="font-semibold text-left uppercase">Filters</span>
      <Select id="sort" options={options} onChange={handleSort} />
    </div>
  );
};

export default FilterSection;
