function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-md mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-green-400">AgriLink AI</h2>

        <p className="text-sm text-gray-400 text-center">
          © 2026 AgriLink AI. Built for smarter farming, fairer pricing, and sustainable agriculture.
        </p>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;