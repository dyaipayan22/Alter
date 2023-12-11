const CartCardSkeleton = () => {
  return (
    <div className="relative w-full bg-white rounded-md flex md:grid md:grid-cols-5 gap-2 h-[120px] md:h-auto p-2 animate-pulse">
      <div className=" flex md:col-span-2 gap-4">
        <div className="w-28 h-full md:h-36 md:w-32 bg-skeleton rounded-md" />
        <div className="hidden md:flex md:flex-col gap-4">
          <div className="w-[160px] h-[18px] bg-skeleton rounded-md" />
          <div className="w-[100px] h-[18px] bg-skeleton rounded-md" />
          <div className="w-[90px] h-[18px] bg-skeleton rounded-md" />
        </div>
      </div>
      <div className="w-full flex flex-col md:hidden gap-4">
        <div className="w-full h-[18px] bg-skeleton rounded-md" />
        <div className="w-1/2 h-[18px] bg-skeleton rounded-md" />
        <div className="w-1/3 h-[18px] bg-skeleton rounded-md" />
        <div className="w-[160px] h-[18px] bg-skeleton rounded-md" />
      </div>
      <div className="w-[60px] h-[18px] bg-skeleton rounded-md mx-auto my-auto hidden md:block" />
      <div className="w-[80px] h-[18px] bg-skeleton rounded-md mx-auto my-auto hidden md:block" />
      <div className="w-[120px] h-[18px] bg-skeleton rounded-md mx-auto my-auto hidden md:block" />
    </div>
  );
};

export default CartCardSkeleton;
