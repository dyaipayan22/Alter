import CartCard from '../cards/CartCard';
import CartCardSkeleton from '../skeleton/CartCardSkeleton';

const CartProducts = (cartItems, loading) => {
  return (
    <div className="w-full md:w-3/5 flex flex-col gap-4 text-center text-sm font-semibold">
      <div className="hidden md:grid grid-cols-5">
        <p className="col-span-2 text-left">PRODUCT DETAILS</p>
        <p>SIZE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
      </div>
      <div className="hidden md:block border" />

      {loading ? (
        <CartCardSkeleton />
      ) : (
        cartItems &&
        cartItems?.map((item, index) => <CartCard {...item} key={index} />)
      )}
    </div>
  );
};

export default CartProducts;
