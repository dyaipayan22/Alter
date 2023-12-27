import { useDispatch } from 'react-redux';
import { Trash2, X } from 'lucide-react';
import { removeItem } from '../../features/cart/cartApi';

const CartCard = (cartItem) => {
  const dispatch = useDispatch();
  const { quantity, size } = cartItem;
  const { _id, name, images, price, category, gender } = cartItem.product;

  const removeCartItem = () => {
    dispatch(removeItem(_id));
  };
  return (
    <div className="relative w-full bg-white text-text-200 shadow-lg rounded-md flex md:grid md:grid-cols-5 gap-2 h-[120px] md:h-auto p-2">
      <div className=" flex md:col-span-2 gap-4">
        {/* <img src={images[0].secureUrl} className="w-28 h-full object-cover" /> */}
        <div className="hidden md:flex flex-col text-left">
          <span className="w-full text-base font-bold md:font-medium justify-start overflow-hidden">
            {name}
          </span>
          <span>
            {category} | {gender}
          </span>
        </div>

        <div className="flex flex-col md:hidden text-left">
          <span className="w-[90%] text-sm font-bold md:font-medium justify-start overflow-hidden">
            {name}
          </span>
          <div className="flex flex-col gap-2 text-sm font-medium md:hidden grow justify-end">
            <p>Size: {size}</p>
            <p>Qty: {quantity}</p>
          </div>
        </div>
        <span className="absolute right-4 bottom-2 font-bold md:hidden">
          Rs. {price}
        </span>
      </div>
      <span className="hidden md:block my-auto">{size}</span>
      <span className="hidden md:block my-auto">{quantity}</span>
      <span className="hidden md:block font-bold my-auto">
        Rs. {quantity * price}
      </span>
      <Trash2
        className="absolute h-4 w-4 right-4 top-3 cursor-pointer"
        onClick={removeCartItem}
      />
    </div>
  );
};

export default CartCard;
