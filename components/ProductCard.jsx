export default function ProductCard({ product, rtl = false }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4" dir={rtl ? 'rtl' : 'ltr'}>
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-primary font-bold text-lg">{product.price} DA</span>
        <button className="bg-rose-100 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
          {rtl ? 'أضف إلى السلة' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
