import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Carousel />
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">Featured</h1>
      </div>
    </div>
  );
};

export default Home;
