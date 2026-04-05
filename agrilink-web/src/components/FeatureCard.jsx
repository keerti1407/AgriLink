function FeatureCard({ title, description }) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureCard;