import { ShoppingCart, Plus, Minus } from "lucide-react";

const ProductCard = ({ product }) => {

  return (
    <div className="w-full max-w-xs rounded-2xl border border-zinc-800 bg-[#18181b] p-4 text-white shadow-lg">

      {/* Product Image */}
      <div className="mb-4 flex h-52 items-center justify-center rounded-xl bg-zinc-900 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <h2 className="mb-2 text-lg font-semibold">
        {product.title}
      </h2>

      <p className="mb-5 text-2xl font-bold text-white">
        ${product.price}
      </p>

      {/* Quantity Selector */}
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm text-zinc-400">
          Quantity
        </span>

        <div className="flex items-center gap-4">
          <button
            className="text-zinc-400 transition hover:text-white"
          >
            <Minus size={18} />
          </button>

          <span className="font-medium">1</span>

          <button
            className="text-zinc-400 transition hover:text-white"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Add To Cart */}
      <button
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-200 active:scale-95"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;