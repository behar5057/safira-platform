import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: "Traditional Algerian Dress",
    description: "Beautiful handmade dress",
    price: "4,500",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"
  },
  {
    id: 2, 
    name: "Artisanal Pottery Set",
    description: "Handcrafted ceramic pieces",
    price: "2,800",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-primary">🛍️ SAFIRA Market</div>
          <div className="flex gap-4">
            <button className="btn-secondary">عربي</button>
            <button className="btn-primary">Create Store</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="w-64 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <input type="range" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full border rounded p-2">
                  <option>All Categories</option>
                  <option>Fashion</option>
                  <option>Home & Garden</option>
                  <option>Electronics</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
