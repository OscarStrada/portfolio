import { Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <header className="w-full block">
        {/* Container */}
        <div className="flex items-center relative bg-blue-200 h-20 px-16">
          {/* Logo - navbar */}
          <div className="font-bold text-xl flex-0 bg-yellow-300">oestrada</div>
          {/* Navigation - navbar */}
          <nav className="flex-1 bg-green-200">
            <ul className="flex justify-end space-x-6">
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
