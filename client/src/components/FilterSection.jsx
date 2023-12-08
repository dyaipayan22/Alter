import { useDispatch } from 'react-redux';

import { sortBy } from '../features/product/productSlice';
import Select from './ui/Select';

const options = [
  { value: 'price:asc', label: 'Price (low to high)' },
  { value: 'price:desc', label: 'Price (high to low)' },
];

const FilterSection = () => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    const value = e.target.value;
    dispatch(sortBy(value));
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl text-primary font-medium text-left">Filter</span>
      <Select id="sort" options={options} onChange={handleSort} />
    </div>
  );
};

export default FilterSection;
