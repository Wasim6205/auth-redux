import { useProductApi } from "../hooks/useProduct"

const Filters = () => {
    const {filterProducts} = useProductApi()
  return (
    <div className="p-3 border flex items-center gap-6 w-full rounded border-gray-500">
        <div className="flex gap-8 w-full">
            <input onChange={(e) => filterProducts(e.target.value)} className="p-2 w-full outline-none border rounded" type="text" placeholder="Search products..." />
            <button className="p-2 bg-white text-black rounded border-none">Search</button>
        </div>

        <div>
            <span>Select categories</span>
            <select className="p-2 bg-white text-black rounded outline-none">
                <option value="groceries">Groceries</option>
                <option value="beauty">Beauty</option>
                <option value="furniture">Furniture</option>
            </select>
        </div>
    </div>
  )
}

export default Filters