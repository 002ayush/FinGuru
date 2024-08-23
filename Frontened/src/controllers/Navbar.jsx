

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950 text-white p-4 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">FinGuru</div>
        <ul className="flex space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
