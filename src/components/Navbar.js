import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Navbar(){
    return (<nav class="navbar navbar-custom">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1"><MenuRoundedIcon className="menu-icon"/> <img className="brand-logo" src="./brand-icon.svg"></img></span>
      <button type="button" class="btn btn-lg btn-custom">Sign In</button>
    </div>
  </nav>);
    
}
export default Navbar;