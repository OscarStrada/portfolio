import { Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <header className="w-full block fixed bg-dark-custom">
        {/* Container */}
        <div className="flex items-center relative h-navbar-custom px-5 md:px-20">
          {/* Logo - navbar */}
          <div className="font-bold text-2xl flex-0">
            <span className="text-green-custom">></span>oestrada
            <span className="text-green-custom">_</span>
          </div>
          {/* Navigation - navbar */}
          <nav className="flex-1">
            <ul className="hidden md:flex justify-end space-x-10">
              <li>About</li>
              <li>Experience</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
