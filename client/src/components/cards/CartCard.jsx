const CartCard = (cartItem) => {
  const { quantity } = cartItem;
  const { _id, name, image, price } = cartItem.product;
  return (
    <div className="w-full bg-white p-4 ">
      <span>
        {name} {quantity} {price}
      </span>
    </div>
  );
};

export default CartCard;
