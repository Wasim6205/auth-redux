
const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-xs animate-pulse rounded-2xl border border-zinc-800 bg-[#18181b] p-4">

      {/* Image Skeleton */}
      <div className="mb-4 h-52 rounded-xl bg-zinc-800" />

      {/* Title Skeleton */}
      <div className="mb-3 h-5 w-4/5 rounded-md bg-zinc-800" />

      {/* Price Skeleton */}
      <div className="mb-5 h-7 w-1/3 rounded-md bg-zinc-800" />

      {/* Quantity Skeleton */}
      <div className="mb-5 flex items-center justify-between">
        <div className="h-4 w-16 rounded bg-zinc-800" />

        <div className="flex items-center gap-4">
          <div className="h-7 w-7 rounded-md bg-zinc-800" />
          <div className="h-4 w-5 rounded bg-zinc-800" />
          <div className="h-7 w-7 rounded-md bg-zinc-800" />
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="h-12 w-full rounded-xl bg-zinc-800" />

    </div>
  );
};

export default ProductCardSkeleton;
