const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <span className='badge badge-pill badge-secondary'>
          Total Items: {totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
