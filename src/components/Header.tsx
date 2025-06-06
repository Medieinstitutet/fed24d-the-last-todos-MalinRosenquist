import featherImg from "../assets/feather.png";

export const Header = () => {
  return (
    <header className="flex flex-row justify-center items-center h-40 sm:h-46 md:h-58 bg-white px-4 gap-4 sm:gap-6">
      <img src={featherImg} alt="Yellow feather" className="h-35 sm:h-40 md:h-50 w-auto rotate-6 object-contain" />
      <h1 className="text-green-900 text-5xl sm:text-7xl md:text-8xl font-[Oregano,_sans-serif]">Easy 2 Do</h1>
    </header>
  );
};
