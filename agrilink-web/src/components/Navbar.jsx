function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-md border-b border-white/10">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-green-400">
        AgriLink AI
      </h1>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#" className="hover:text-white transition">Home</a>
        <a href="#" className="hover:text-white transition">Features</a>
        <a href="#" className="hover:text-white transition">Marketplace</a>
        <a href="#" className="hover:text-white transition">AI Tools</a>
      </div>

      {/* Button */}
      <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl text-sm font-medium transition">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;

