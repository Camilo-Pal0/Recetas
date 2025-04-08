export const LinksRecetasCaseras = ({ Receta }) => {
  return (
    <a
      href="#"
      className="inline-block text-xs sm:text-sm font-semibold text-pink-400 px-3 py-1 border border-pink-400 rounded-md hover:bg-pink-400 hover:text-white transition-all duration-300 ease-in-out cursor-pointer text-center"
    >
      {Receta}
    </a>
  );
};
