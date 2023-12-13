import FilterSection from '../components/FilterSection';
import DisplayProducts from '../components/DisplayProducts';

const Shop = () => {
  return (
    <div className="w-full h-full flex gap-8">
      <div className="w-1/5 bg-background-primary rounded-md hidden lg:block">
        <FilterSection />
      </div>
      <div className="grow">
        <DisplayProducts />
      </div>
    </div>
  );
};

export default Shop;
