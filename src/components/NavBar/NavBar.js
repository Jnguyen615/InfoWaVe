import './NavBar.scss';
import { useState } from 'react';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="nav-bar">
      <div className="search">
        <input
          type="text"
          id="search"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          readOnly
        />
      </div>
    </div>
  );
};

export default NavBar;
