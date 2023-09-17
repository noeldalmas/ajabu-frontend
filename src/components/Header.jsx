

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="logo.jpg" alt="" width={"50px"} />
        <span className="ajwbt">ajwbt</span>
        <span className="com">com</span>
      </div>
      <div className="search">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <nav className="header-nav">
        <i className="fas fa-home"></i>
        <i className="fas fa-bell"></i>
        <i className="fas fa-cog"></i>
        <i className="fas fa-dashboard"></i>
        <span>
          EN <i className="fas fa-chevron-down"></i>
        </span>
      </nav>
      <div className="profile">
        <img src="profile.jpg" alt="profile photo"/>
        <i className="fas fa-chevron-down white-icons"></i>
      </div>
    </header>
  );
}

export default Header