import { useDispatch } from 'react-redux';
import { SearchIcon } from 'lucide-react';

import { debounce } from '../utils/debounce';
import { searchProduct } from '../features/product/productSlice';

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(searchProduct(value));
  };

  const handleSearch = debounce(handleChange, 500);
  return (
    <div className="hidden border-2 bg-background-200 border-background-200 lg:flex items-center gap-2 w-1/3 pl-2 rounded-[10px]">
      <SearchIcon className="w-5 h-5 text-text-200  peer" />
      <input
        type="text"
        onChange={handleSearch}
        className="text-text-200 outline-none text-sm w-full h-full p-3"
        placeholder="Search for products, brands and more"
      />
    </div>
  );
};

export default Search;
