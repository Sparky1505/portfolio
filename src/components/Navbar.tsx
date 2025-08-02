const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Jayasurya Portfolio</h1>
      <ul className="flex space-x-6 list-none">
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="cursor-pointer hover:text-blue-500">About</li>
        <li className="cursor-pointer hover:text-blue-500">Projects</li>
        <li className="cursor-pointer hover:text-blue-500">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
