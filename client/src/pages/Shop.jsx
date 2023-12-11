import FilterSection from '../components/FilterSection';
import DisplayProducts from '../components/DisplayProducts';

const Shop = () => {
  return (
    // <div className="w-full flex gap-6">
    //   <FilterSection />
    //   <div className="grow bg-blue-200 flex flex-col gap-4">
    //     <div className="flex items-start justify-between">
    //       <span>12 results</span>
    //       <span>Sort</span>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    //       {allProducts &&
    //         allProducts?.map((item) => (
    //           <ProductCard key={item._id} {...item} />
    //         ))}
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-full flex gap-8">
      <div className="w-1/5 bg-white/70 rounded-md p-4 hidden lg:block">
        <FilterSection />
      </div>
      <div className="grow">
        <DisplayProducts />
      </div>
    </div>
  );
};

export default Shop;
