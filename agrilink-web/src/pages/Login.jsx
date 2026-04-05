function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-green-950 text-white flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 w-full max-w-6xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-green-500/20 to-purple-500/20 border-r border-white/10">
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            AgriLink AI
          </p>
          <h1 className="text-5xl font-bold leading-tight">
            Smarter Farming,
            <span className="text-green-400"> Fairer Prices</span>
          </h1>
          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Empowering farmers with crop trading, waste monetization,
            AI-powered disease detection, smart price prediction,
            and secure digital transactions.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
          <p className="text-gray-400 text-center mb-8">
            Sign in to access your AgriLink AI dashboard
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-green-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-2xl font-semibold transition"
            >
              Sign In
            </button>
          </form>

                   <div className="mt-6">
            <p className="text-sm text-gray-400 text-center mb-4">
              Quick Demo Access
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                className="bg-white/5 border border-white/10 hover:border-green-400 py-2 rounded-xl text-sm transition"
              >
                Farmer Demo
              </button>

              <button
                type="button"
                className="bg-white/5 border border-white/10 hover:border-purple-400 py-2 rounded-xl text-sm transition"
              >
                Buyer Demo
              </button>

              <button
                type="button"
                className="bg-white/5 border border-white/10 hover:border-yellow-400 py-2 rounded-xl text-sm transition"
              >
                Admin Demo
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-400 text-center mt-6">
            Don’t have an account?{" "}
            <span className="text-green-400 cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;