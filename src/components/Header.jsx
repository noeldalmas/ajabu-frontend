import { useState } from "react";

function Header() {

  const[search, setSearch] = useState(false)

  const handleSearch = () => {
    setSearch(!search)
  }
  return (
    <header>
      <img src="logo.jpg" alt="logo" className="logo" />
      <nav className="header-nav">
        <div className="search">
          <i className="fas fa-search" id="fa-search" onClick={handleSearch}></i>
          {search && <input type="text" placeholder="Search" />}
        </div>
        <i className="fas fa-th"></i>
        <i className="fas fa-calendar mgn-010"></i>
        <i className="fas fa-question mgn-010"></i>
        <i className="fas fa-external-link mgn-010"></i>
        <i className="fas fa-bell mgn-010"></i>
      </nav>
      <div className="profile">
        <span>
          EN <i className="fas fa-chevron-down mgn-010"></i>
        </span>
        <img src="profile.jpg" alt="profile photo" />
        <i className="fas fa-chevron-down white-icons"></i>
      </div>
    </header>
  );
}

export default Header