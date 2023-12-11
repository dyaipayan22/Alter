import image1 from '/src/assets/image.jpg';
import { X } from 'lucide-react';

const CartCard = (cartItem) => {
  const { quantity, size } = cartItem;
  const { _id, name, image, price, category, gender } = cartItem.product;
  return (
    <div className="relative w-full bg-white rounded-md flex md:grid md:grid-cols-5 gap-2 h-[120px] md:h-auto p-2">
      <div className=" flex md:col-span-2 gap-4">
        <img src={image1} className="w-28 h-full object-cover" />
        <div className="hidden md:flex flex-col text-left">
          <span className="text-base font-bold md:font-medium justify-start truncate">
            {name}
          </span>
          <span>
            {category} | {gender}
          </span>
        </div>

        <div className="flex flex-col md:hidden text-left">
          <span className="w-full text-base font-bold md:font-medium justify-start truncate">
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
    </div>
  );
};

export default CartCard;
