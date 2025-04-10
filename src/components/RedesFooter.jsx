export const RedesFooter = () => {
    return (
      <div className="text-2xl flex gap-6 justify-center sm:items-center flex-wrap">
        <div className="flex items-center gap-2 hover:text-pink-400 cursor-pointer transition-all duration-300 ease-in-out transform">
          <i className="fa-brands fa-facebook-f text-lg"></i>
          <p className="text-lg font-semibold hidden lg:block">Facebook</p>
        </div>
  
        <div className="flex items-center gap-2 hover:text-pink-400 cursor-pointer transition-all duration-300 ease-in-out transform">
          <i className="fa-brands fa-x-twitter text-lg"></i>
          <p className="text-lg font-semibold hidden lg:block">Twitter</p>
        </div>
  
        <div className="flex items-center gap-2 hover:text-pink-400 cursor-pointer transition-all duration-300 ease-in-out transform">
          <i className="fa-brands fa-instagram text-lg"></i>
          <p className="text-lg font-semibold hidden lg:block">Instagram</p>
        </div>
  
        <div className="flex items-center gap-2 hover:text-pink-400 cursor-pointer transition-all duration-300 ease-in-out transform">
          <i className="fa-brands fa-pinterest text-lg"></i>
          <p className="text-lg font-semibold hidden lg:block">Pinterest</p>
        </div>
  
        <div className="flex items-center gap-2 hover:text-pink-400 cursor-pointer transition-all duration-300 ease-in-out transform">
          <i className="fa-brands fa-youtube text-lg"></i>
          <p className="text-lg font-semibold hidden lg:block">YouTube</p>
        </div>
      </div>
    );
  };
  