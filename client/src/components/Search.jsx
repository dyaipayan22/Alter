import { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { debounce } from '../utils/debounce';
import { searchProduct } from '../features/product/productSlice';

const Search = () => {
  const dispatch = useDispatch();
  // const [search, setSearch] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams({ search: '' });

  const handleChange = (e) => {
    // const value = e.target.value;
    // console.log(value);
    // //setSearch(value);
    // value === '' ? setSearchParams('') : setSearchParams({ search: value });
    // const search = searchParams.get('search');
    // dispatch(fetchProducts({ search }));
    const value = e.target.value;
    dispatch(searchProduct(value));
  };

  const handleSearch = debounce(handleChange, 500);
  return (
    <div>
      <input type="text" onChange={handleSearch} className="text-white" />
    </div>
  );
};

export default Search;
