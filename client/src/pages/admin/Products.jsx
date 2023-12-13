import Table from '../../components/Table';

const Products = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-rows-5 lg:grid-cols-5 gap-2 uppercase text-sm font-medium text-center">
        <span>Name</span>
        <span>Category</span>
        <span>Brand</span>
        <span>Price</span>
        <span>Stock</span>
      </div>
    </div>
  );
};

export default Products;
