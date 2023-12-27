const ProductCardSkeleton = () => {
  return (
    <div className="w-[210px] overflow-hidden animate-pulse">
      <div className="flex flex-col w-[210px] h-[280px] bg-background-300/40" />
      <div className="flex flex-col gap-1 p-2">
        <div className="h-[16px] w-1/2 bg-background-300/40 rounded-md" />
        <div className="h-[16px] w-full bg-background-300/40 rounded-md" />
        <div className="h-[16px] w-1/3 bg-background-300/40 rounded-md" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
