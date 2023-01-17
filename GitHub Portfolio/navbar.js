function NavBar(){
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="#/">Race Bad Bank Home</a>
      <div className="collapse=navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create A New Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Make a Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Make a Withdrawl</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Check Your Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    </div>
  );
}