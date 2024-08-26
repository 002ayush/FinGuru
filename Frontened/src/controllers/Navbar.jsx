
import {NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-30  bg-gray-950 text-white p-4 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl "><span className="text-blue-900 text-3xl">F</span>in<span className="text-blue-900 text-3xl">G</span>uru</div>
        <ul className="flex space-x-4">
          <li className="hover:underline">
            <NavLink className={({isActive}) => `${isActive?"text-amber-800":"text-white"}`} to="/home">Home</NavLink>
          </li>
          <li className="hover:underline">
            <NavLink className={({isActive}) => `${isActive?"text-amber-800":"text-white"}`} to="/about">About</NavLink>
          </li>
          <li className="hover:underline">
            <NavLink className={({isActive}) => `${isActive?"text-amber-800":"text-white"}`} to="/contact">Contact us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
