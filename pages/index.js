export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-rose-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-primary">🛍️ SAFIRA</div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
          <a href="#about" className="text-gray-600 hover:text-primary">About</a>
        </div>
        <div className="flex space-x-4">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Start Your Online Store in <span className="text-primary">5 Minutes</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          No coding needed - Perfect for Algerian entrepreneurs. Accept Cash on Delivery and reach customers nationwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4">
            Create Your Store - It's Free
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Choose SAFIRA?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "📱", title: "Mobile-First", desc: "Perfect for smartphone users" },
            { icon: "💳", title: "Local Payments", desc: "COD, bank transfer, and more" },
            { icon: "🚀", title: "Easy Setup", desc: "Store ready in 5 minutes" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
