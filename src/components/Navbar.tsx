const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 shadow-md text-white"
         style={{ background: 'linear-gradient(to right, #1e293b, #0f172a)' }}>
      <h1 className="text-2xl font-bold white-text-Nav">Jayasurya Pazhani</h1>
      <ul className="flex gap-8 list-none">
  <li className="white-text-Nav cursor-pointer hover:text-blue-400">Home</li>
  <li className="white-text-Nav cursor-pointer hover:text-blue-400">About</li>
  <li className="white-text-Nav cursor-pointer hover:text-blue-400">Projects</li>
  <li className="white-text-Nav cursor-pointer hover:text-blue-400">Contact</li>
</ul>

    </nav>
  );
};

export default Navbar;
