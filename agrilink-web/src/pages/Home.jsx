import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-green-950 text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 h-[85vh]">
        <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
          Smarter Farming, Fairer Prices
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight">
          Revolutionizing Agriculture with{" "}
          <span className="text-green-400">AI</span> and{" "}
          <span className="text-purple-400">Blockchain</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl">
          Buy and sell crops, monetize agricultural waste, detect crop diseases,
          predict market prices, and build trust with secure digital transactions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl text-lg font-semibold transition shadow-lg">
            Explore Marketplace
          </button>

          <button className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-2xl text-lg font-semibold transition">
            Try AI Tools
          </button>
        </div>
            </section>

      <section className="px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-green-400">12K+</h2>
            <p className="text-gray-300 mt-2">Farmers Connected</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-purple-400">85T</h2>
            <p className="text-gray-300 mt-2">Agricultural Waste Reused</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-yellow-400">₹4.5Cr</h2>
            <p className="text-gray-300 mt-2">Total Trade Value</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;