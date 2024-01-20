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
        <button className="home-btn">Home</button>
      </div>
    </div>
  );
};

export default NavBar;
