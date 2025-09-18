const Logo = () => (
  <div className="flex items-center">
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">AC</span>
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-neutral-warm-900 tracking-tight leading-none">
          Bill Jonathan
        </span>
        <span className="text-sm font-medium text-primary-700 tracking-wider leading-none">
          Life in the UK Documents
        </span>
      </div>
    </div>
  </div>
);

export default Logo;
