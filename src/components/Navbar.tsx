const Navbar = () => {
  return (
<nav className="w-full h-16 flex items-center justify-between px-8 bg-gray-900/90 text-white backdrop-blur-sm border-b border-gray-700">
  <h1 className="text-2xl font-bold">Jayasurya Pazhani</h1>
  <ul className="flex gap-8 list-none">
    <li className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
      Home
    </li>
    <li className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
      About
    </li>
    <li className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
      Projects
    </li>
    <li className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
      Contact
    </li>
  </ul>
</nav>

  );
};

export default Navbar;
