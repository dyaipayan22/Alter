const ProductCardSkeleton = () => {
  return (
    <div className="w-[210px] rounded-md border-2 overflow-hidden animate-pulse">
      <div className="flex flex-col w-[210px] h-[280px] bg-skeleton" />
      <div className="flex flex-col gap-1 p-2">
        <div className="h-[18px] w-1/2 bg-skeleton rounded-md" />
        <div className="h-[18px] w-full bg-skeleton rounded-md" />
        <div className="h-[18px] w-1/3 bg-skeleton rounded-md" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
